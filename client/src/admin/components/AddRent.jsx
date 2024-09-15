import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';

const AddRent = ({ show, onClose }) => {
  const [rentType, setRentType] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form data (e.g., submit the new rent details to your backend or update state)
    console.log({ rentType, amount, startDate, endDate, transactionId, isPaid });
    onClose(); // Close the modal after submitting
  };

  return (
    <div className={`fixed bottom-0 w-full inset-0 bg-gray-800 bg-opacity-60 flex flex-col items-center z-[999] transition-all duration-300 ${show ? 'block' : 'hidden'}`}>
      <div className="bg-white relative rounded-t-lg p-6 w-full max-w-lg mx-auto mt-auto shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Rent Details</h2>

        {/* Rent Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rent Type Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Rent Type</label>
            <input
              type="text"
              value={rentType}
              onChange={(e) => setRentType(e.target.value)}
              placeholder="Enter rent type"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Start Date Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* End Date Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Transaction ID (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Transaction ID (Optional)</label>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter transaction ID"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Is Paid Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isPaid}
              onChange={(e) => setIsPaid(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Mark as Paid</label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            {/* <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
            >
              Add Rent
            </button> */}
            <button type='submit' className="w-full mt-[10px] bg-[#0652AD] border shadow-lg text-white py-[15px] text-[18px] font-semibold rounded-[5px] hover:bg-[#054ba1] transition-all">Add Rent</button>
          </div>
        </form>

        {/* Close Button */}
        <CgClose
          color='#9B224B'
          size={'25px'}
          className='cursor-pointer absolute right-[15px] top-[15px]'
          onClick={onClose}
          aria-label="Close modal"
        />
      </div>
    </div>
  );
};

export default AddRent;
