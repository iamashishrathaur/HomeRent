import React, { useState } from 'react';
import paymentLogo from '../assets/check_mark.png';
import { MdDelete } from 'react-icons/md';

const DetailCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rentType = 'Light bill';
  const date = '01/09/2002';
  const amount = '100';
  const transactionId = '1111111';
  const isPaid = false;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Prevent card from collapsing when clicking on buttons
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`w-full bg-white flex flex-col shadow-lg rounded-lg p-[15px] my-4 relative border border-gray-200 transition-all duration-300 transform ${
        isExpanded ? 'min-h-40' : 'min-h-20'
      } hover:shadow-xl hover:scale-[1.02] cursor-pointer`}
      onClick={toggleExpand}
    >
      {/* Header with Rent Type and Amount */}
      <div className="flex justify-between items-center text-gray-800">
        <p className="font-semibold text-lg">{rentType}</p>
        <span
          className={`text-xl font-bold ${
            isPaid ? 'text-green-500' : 'text-red-500'
          }`}
        >
          ₹ {amount}
        </span>
      </div>

      {/* Transaction ID and Date */}
      <div className="flex justify-between mt-2 text-gray-500">
        <span className="text-sm">Transaction ID: {transactionId}</span>
        
      </div>

      {/* Payment Status */}
      <div className="flex justify-between items-center mt-2">
      <span className="text-sm from-neutral-700">{date} <strong>to</strong> {date}</span>
        {isPaid ? (
          <div className="flex items-center gap-2">
            <img
              src={paymentLogo}
              className="w-7 h-7"
              alt="Payment successful"
            />
            <span className="text-green-600 font-medium">Paid</span>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold text-sm shadow-md hover:bg-blue-600"
            onClick={handleButtonClick}
          >
            Mark as Paid
          </button>
        )}
      </div>

      {/* Expanded Section */}
      {isExpanded && (
        <div className="mt-4 border-t border-gray-200 pt-4 space-y-4">
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600"
              onClick={handleButtonClick}
            >
              Confirm Payment
            </button>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-lg flex items-center gap-2 shadow-md hover:bg-red-600"
              onClick={handleButtonClick}
            >
              <MdDelete size={20} />
              Delete
            </button>
          </div>

          {/* View Details Button */}
          <div className="flex justify-center">
            <button
              className="bg-gray-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-600"
              onClick={handleButtonClick}
            >
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCard;
