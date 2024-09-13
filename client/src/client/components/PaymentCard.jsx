import React from 'react';
import paymentLogo from '../assets/check_mark.png';

const PaymentCard = ({ rentType, date, endDate, amount, transactionId, isPaid }) => {
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
      <div className='flex items-center justify-between text-sm text-gray-600 mt-1'>
        <span className='font-medium'>Transaction ID: {transactionId}</span>
        <div className='flex flex-col items-center'>
          {/* Check if endDate is provided, and display date range */}
          <span className='font-medium'>
            {date} {endDate && <strong>to</strong>} {endDate}
          </span>
        </div>
      </div>

      {/* Payment Button or Logo */}
      <div className='flex justify-end items-center mt-3'>
        {isPaid ? (
          <img
            src={paymentLogo}
            className='w-8 h-8'
            alt='Payment successful'
          />
        ) : (
          <button className='bg-[#0652AD] hover:bg-[#084a9a] hover:scale-[1.03] transition-all rounded-full px-4 py-2 text-white font-semibold text-sm shadow-md'>
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
