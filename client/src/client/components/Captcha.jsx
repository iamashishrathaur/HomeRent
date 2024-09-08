import React, { useState, useRef } from 'react';
import { FaRedoAlt } from "react-icons/fa";

const Captcha = ({ onCaptchaAnswer }) => {

  const canvasRef = useRef(null);

  // Generate a math question with either addition or subtraction
  const generateCaptcha = () => {
    let num1 = Math.floor(Math.random() * 9) + 1;  // Random number between 1-9 (greater than 0)
    let num2 = Math.floor(Math.random() * 9) + 1;  // Random number between 1-9 (greater than 0)
    

    // Randomly choose either addition or subtraction
    const operation = Math.random() > 0.5 ? '+' : '-';

    let question;
    let answer;

    if (operation === '-') {
      // Ensure num1 is always greater than or equal to num2 for subtraction
      if (num1 < num2) {
        [num1, num2] = [num2, num1];  // Swap numbers
      }
      question = `${num1} - ${num2} = ?`;
      answer = num1 - num2;
    } else {
      // For addition, no swapping is needed
      question = `${num1} + ${num2} = ?`;
      answer = num1 + num2;
    }

    drawCaptcha(question);
    onCaptchaAnswer(answer);
  };

  // Draw CAPTCHA on Canvas
  const drawCaptcha = (captchaText) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to 110x40
    canvas.width = 110;
    canvas.height = 40;

    // Add black background color
    ctx.fillStyle = '#000';  // Black background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add diagonal white line through the CAPTCHA
    ctx.strokeStyle = '#fff';  // White diagonal line
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();

    // Draw the CAPTCHA math equation
    ctx.font = '20px Arial';  // Smaller font size to fit within the height
    ctx.fillStyle = '#fff';  // White text color
    ctx.fillText(captchaText, 5, 30);  // Adjust position to fit
  };


  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className='mt-5 flex'>
          <canvas ref={canvasRef} style={{ border: '1px solid #000' }} ></canvas> <i className="fas fa-redo-alt"></i> 
          <div className='items-center justify-center self-end p-2 bg-transparent rounded-full cursor-pointer ' onClick={generateCaptcha}><FaRedoAlt size={'1.2rem'} color='rgba(0, 0, 0, 0.54)' className=''/> </div>
    </div>
  );
};

export default Captcha;
