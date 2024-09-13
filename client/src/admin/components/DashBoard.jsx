import React from 'react';

const Dashboard = ({ isReceived, pending }) => {
  return (
    <div className='w-full flex shadow-md min-h-20 bg-white rounded-lg p-5 font-[Roboto]'>
      {/* Received Section */}
      <div className='flex-1 flex flex-col justify-center items-center border-r px-4'>
        <h3 className='text-red-600 font-bold text-2xl'>
          ₹ {isReceived || '00'}
        </h3>
        <small className='text-gray-500 text-sm mt-2'>Received</small>
      </div>
      
      {/* Pending Section */}
      <div className='flex-1 flex flex-col justify-center items-center border-l px-4'>
        <h3 className='text-green-600 font-bold text-2xl'>
          ₹ {pending || '00'}
        </h3>
        <small className='text-gray-500 text-sm mt-2'>Pending</small>
      </div>
    </div>
  );
};

export default Dashboard;
