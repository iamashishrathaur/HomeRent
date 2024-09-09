import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Captcha from "./client/components/Captcha";

const LoginForm = () => {
  const navigate = useNavigate();
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [error, setError] = useState(null);

  const handleCaptchaAnswer = (answer) => {
    setCaptchaAnswer(answer); 
  };

  const handleLogin = () => {
    if (captchaAnswer === null) {
      setError("CAPTCHA has not been loaded. Please try again.");
      return;
    }
    if (userCaptchaInput === "") {
      setError("Please enter the CAPTCHA answer.");
      return;
    }
    
    if (parseInt(userCaptchaInput) === captchaAnswer) {
      // Proceed with login (e.g., authentication logic here)
      navigate("/");
    } else {
      setError("Incorrect CAPTCHA. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="p-5 w-full">
        <h3 className="text-center text-black text-[38px] font-bold leading-[42px] drop-shadow">Login</h3>
        <label htmlFor="username" className="block mt-[30px] text-black text-[16px] font-medium">
          Mobile Number
        </label>
        <input
          type="text"
          placeholder="Mobile Number"
          id="username"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] outline-none p-[0_10px] mt-[8px] text-[14px] font-light text-black placeholder-gray-500"
        />
        <label htmlFor="password" className="block mt-[20px] text-black text-[16px] font-medium">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] p-[0_10px] mt-[8px] outline-none text-[14px] font-light text-black placeholder-gray-500"
        />

        {/* CAPTCHA Component */}
        <Captcha onCaptchaAnswer={handleCaptchaAnswer} />

        {/* CAPTCHA Input */}
        <input
          type="number"
          id="captcha"
          value={userCaptchaInput}
          onChange={(e) => setUserCaptchaInput(e.target.value)} // Update the user's CAPTCHA input
          placeholder="Enter the answer"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] p-[0_10px] mt-[10px] outline-none text-[14px] font-light text-black placeholder-gray-500"
        />

        {/* Show error message if CAPTCHA is incorrect */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          className="w-full mt-[50px] bg-[#0652AD] border shadow-lg text-white py-[15px] text-[18px] font-semibold rounded-[5px] hover:bg-[#054ba1] transition-all"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
