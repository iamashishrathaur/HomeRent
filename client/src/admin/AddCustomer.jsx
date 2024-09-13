import React, { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

const AddCustomer = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up when unmounting or closing modal
    };
  }, [show]);

  if (!show) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className={`fixed top-0 w-full inset-0 bg-gray-800 bg-opacity-60 flex flex-col items-center z-[999] font-[Roboto]
        ${show ? 'opacity-100' : 'opacity-0'} ${show ? 'h-auto' : 'min-h-0'}
        transition-all duration-700 ease-in-out overflow-hidden`}
    >
      <div
        className={`p-5 bg-white shadow-lg w-full max-w-md rounded-[0px_0px_10px_10px] relative transform transition-transform duration-500 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <CgClose
          color='#9B224B'
          size={'25px'}
          className='mr-5 cursor-pointer absolute right-[10px] top-[10px]'
          onClick={onClose}
          aria-label="Close modal"
        />
        <h3 className="text-center mt-5 text-black text-[30px] font-bold leading-[42px] drop-shadow">
          Add Member
        </h3>

        <label htmlFor="username" className="block mt-[30px] text-black text-[16px] font-medium">
          Member name
        </label>
        <input
          type="text"
          placeholder="Member name"
          id="username"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] outline-none p-[0_10px] mt-[8px] text-[14px] text-black placeholder-gray-500"
          aria-label="Member name"
        />

        <label htmlFor="mobile" className="block mt-[20px] text-black text-[16px] font-medium">
          Mobile Number
        </label>
        <input
          type="text"
          placeholder="Mobile Number"
          id="mobile"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] p-[0_10px] mt-[8px] outline-none text-[14px]  text-black placeholder-gray-500"
          aria-label="Mobile number"
        />

        <label htmlFor="aadhaarid" className="block mt-[20px] text-black text-[16px] font-medium">
          Aadhaar Id <small className='text-gray-600'>(optional)</small>
        </label>
        <input
          type="text"
          placeholder="Aadhaar Number"
          id="aadhaarid"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] p-[0_10px] mt-[8px] outline-none text-[14px]  text-black placeholder-gray-500"
          aria-label="Aadhaar number"
        />

        <label htmlFor="date" className="block mt-[20px] text-black text-[16px] font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="block w-full h-[50px] bg-white bg-opacity-10 rounded-[3px] border-2 border-[black] p-[0_10px] mt-[8px] outline-none text-[14px]  text-black"
          aria-label="Select date"
        />

        <button
          className="w-full mt-[50px] bg-[#0652AD] border shadow-lg text-white py-[15px] text-[18px] font-semibold rounded-[5px] hover:bg-[#054ba1] transition-all"
        >
          Add Member
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
