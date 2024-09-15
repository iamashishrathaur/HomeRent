import React from 'react';
import paymentLogo from '../assets/check_mark.png';
import { Navigate, useNavigate } from 'react-router-dom';

const PaymentCard = ({ rentType, date, endDate, amount, transactionId, isPaid, paidDate='1/2/2023' }) => {
  const navigate= useNavigate()
  return (
    <div className='w-full bg-white flex flex-col shadow-md min-h-10 rounded-lg p-4 my-2 relative border transition-all hover:shadow-lg hover:scale-[1.01]'>
      <div className='flex font-medium pb-2 text-black items-center justify-between'>
        {/* Rent Type */}
        <p className='text-lg font-semibold'>{rentType}</p>
        <div className='flex justify-end items-center text-lg font-bold'>
          <span className={isPaid ? 'text-green-600' : 'text-red-600'}>
            ₹ {amount}
          </span>
        </div>
      </div>

      {/* Transaction and Date Details */}
      <div className='flex items-center justify-between text-sm text-gray-600'>
        <div className='flex flex-col font-medium gap-[2px]'><span>Transaction ID</span><span className='font-normal text-sm text-gray-400'> {transactionId}</span></div>
        <div className='flex flex-col items-center'>
          {/* Display date range */}
          <span className='font-medium'>
            {date} {endDate && <strong>to</strong>} {endDate}
          </span>
        </div>
      </div>

      {/* Payment Button or Logo */}
      <div className='flex justify-between items-center mt-1'>
        {/* Display paid date if payment is completed */}
        
            <span className='font-medium text-gray-500 mt-1'>
              {paidDate && <>Paid on: {paidDate}</>}
            </span>
          
        {isPaid ? (
          <img
            src={paymentLogo}
            className='w-8 h-8'
            alt='Payment successful'
          />
        ) : (
          <button className='bg-[#0652AD] hover:bg-[#084a9a] hover:scale-[1.03] transition-all rounded-full px-5 py-2 text-white font-semibold text-sm shadow-md' onClick={()=>navigate('/payment')}>
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
