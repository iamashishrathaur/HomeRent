import React from 'react';

const Dashboard = ({ alReadyPay, deuRent }) => {
  return (
    <div className='w-full flex shadow-md min-h-20 bg-white rounded-lg p-5 font-[Roboto]'>
      {/* Already Paid Section */}
      <div className='flex-1 border-r flex flex-col justify-center items-center'>
        <h3 className='text-red-600 font-bold text-2xl'>₹ {alReadyPay || '00'}</h3>
        <small className='text-sm text-gray-500 mt-2'>Already Paid</small>
      </div>

      {/* Due Rent Section */}
      <div className='flex-1 border-l flex flex-col justify-center items-center'>
        <h3 className='text-green-600 font-bold text-2xl'>₹ {deuRent || '00'}</h3>
        <small className='text-sm text-gray-500 mt-2'>Due Rent</small>
      </div>
    </div>
  );
};

export default Dashboard;
