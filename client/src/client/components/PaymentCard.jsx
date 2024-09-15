import React, { useState } from 'react';
import paymentLogo from '../assets/check_mark.png';
import { useNavigate } from 'react-router-dom';

const PaymentCard = ({ rentType, date, endDate, amount, transactionId, isPaid, paidDate = '1/2/2023' }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the card is clicked (expanded)

  // Function to toggle the expanded state on click
  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`w-full bg-white flex flex-col shadow-md rounded-lg p-4 my-2 relative border transition-all hover:shadow-lg hover:scale-[1.01] cursor-pointer ${
        isExpanded ? 'min-h-16' : 'min-h-10'
      }`}
    >
      <div className="flex font-medium pb-2 text-black items-center justify-between">
        {/* Rent Type */}
        <p className="text-lg font-semibold">{rentType}</p>
        <div className="flex justify-end items-center text-lg font-bold">
          <span className={isPaid ? 'text-green-600' : 'text-red-600'}>₹ {amount}</span>
        </div>
      </div>

      {/* Transaction and Date Details */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex flex-col font-medium gap-[2px]">
          <span>Transaction ID</span>
          <span className="font-normal text-sm text-gray-400"> {transactionId}</span>
        </div>
        <div className="flex flex-col items-center">
          {/* Display date range */}
          <span className="font-medium">
            {date} {endDate && <strong>to</strong>} {endDate}
          </span>
        </div>
      </div>

      {/* Conditionally render payment button or paid date based on isExpanded */}
      {isExpanded && (
        <div className="mt-4 border-t border-gray-200 pt-4 space-y-4">
          <div className="flex justify-between items-center">
            {/* Display paid date if payment is completed */}
            {isPaid ? (
              <span className="font-medium text-gray-500 mt-1">Paid on: {paidDate}</span>
            ) : <span></span>}

            {/* Show Pay button if not paid */}
            {!isPaid ? (
              <button
                className="bg-[#0652AD] hover:bg-[#084a9a] hover:scale-[1.03] transition-all rounded-full px-5 py-2 text-white font-semibold text-sm shadow-md border-2 border-[#0652AD]"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click
                  navigate('/payment');
                }}
              >
                Pay
              </button>
            ) : (
              <img src={paymentLogo} className="w-8 h-8" alt="Payment successful" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCard;
