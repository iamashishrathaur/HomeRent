import React, { useState, useRef, useEffect } from 'react';
import { FaRedoAlt } from "react-icons/fa";

const Captcha = ({ onCaptchaAnswer }) => {
  const canvasRef = useRef(null);

  // Generate a math question with either addition or subtraction
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;  // Random number between 1-9
    const num2 = Math.floor(Math.random() * 9) + 1;  // Random number between 1-9

    // Randomly choose either addition or subtraction
    const operation = Math.random() > 0.5 ? '+' : '-';
    let question, answer;

    if (operation === '-') {
      // Ensure num1 is always greater than or equal to num2 for subtraction
      question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)} = ?`;
      answer = Math.max(num1, num2) - Math.min(num1, num2);
    } else {
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

    // Set canvas dimensions
    canvas.width = 110;
    canvas.height = 40;

    // Set black background color
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add diagonal white line through the CAPTCHA
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();

    // Draw the CAPTCHA math equation
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(captchaText, 5, 30);
  };

  useEffect(() => {
    generateCaptcha(); // Generate CAPTCHA on component mount
  }, []);

  return (
    <div className="mt-5 flex items-center">
      <canvas ref={canvasRef} style={{ border: '1px solid #000' }}></canvas>
      <div
        className="p-2 cursor-pointer"
        onClick={generateCaptcha}
      >
        <FaRedoAlt size="1.2rem" color="rgba(0, 0, 0, 0.54)" className='mt-2'/>
      </div>
    </div>
  );
};

export default Captcha;
