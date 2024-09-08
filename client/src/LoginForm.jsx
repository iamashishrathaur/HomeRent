import React from "react";
import { useNavigate } from "react-router-dom";
import Captcha from "./client/components/Captcha";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleCaptchaAnswer = (answer) => {
    // setCaptchaAnswer(answer);
    console.log('Received CAPTCHA answer:', answer);
  };
  return (
    // <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">
    //   <div className="absolute w-[280px] h-[400px]">
    //     <div className="absolute h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#1845ad] to-[#23a2f6] -top-[80px] -left-[80px]"></div>
    //     <div className="absolute h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#ff512f] to-[#f09819] -bottom-[80px] -right-[80px]"></div>
    //   </div>
    //   <form className="relative w-[400px] h-[520px] bg-white bg-opacity-10 backdrop-blur-md rounded-[10px] p-[50px_35px] border border-white/10 shadow-[0_0_40px_rgba(8,7,16,0.6)]" >
    //     <h3 className="text-center text-white text-[32px] font-medium leading-[42px]">Login <span className="text-blue-500">Here</span></h3>

    //     <label htmlFor="username" className="block mt-[30px] text-black text-[16px] font-medium">
    //       Username
    //     </label>
        // <input
        //   type="text"
        //   placeholder="Mobile Number"
        //   id="username"
        //   className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] outline-none p-[0_10px] mt-[8px] text-[14px] font-light text-black placeholder-gray-500"
        // />

        // <label htmlFor="password" className="block mt-[30px] text-black text-[16px] font-medium">
        //   Password
        // </label>
        // <input
        //   type="password"
        //   placeholder="Password"
        //   id="password"
        //   className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] p-[0_10px] mt-[8px] outline-none text-[14px] font-light text-black placeholder-gray-500"
        // />

        // <button className="w-full mt-[50px] bg-white border shadow-lg text-[#080710] py-[15px] text-[18px] font-semibold rounded-[5px] hover:bg-gray-200 transition-all" onClick={()=>navigate('/')}>
        //   Log In
        // </button>
    //   </form>
    // </div>

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
        <Captcha onCaptchaAnswer={handleCaptchaAnswer}/>
        <input
          type="text"
          placeholder="Enter the answer"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] p-[0_10px] mt-[10px] outline-none text-[14px] font-light text-black placeholder-gray-500"
        />
         <button className="w-full mt-[50px] bg-[#0652AD] border shadow-lg text-white py-[15px] text-[18px] font-semibold rounded-[5px] hover:bg-[#054ba1] transition-all" onClick={()=>navigate('/')}>
          Log In
        </button>
        </div>
    </div>
  );
};

export default LoginForm;
