import React from 'react';

const Dashboard = ({ alReadyPay, deuRent }) => {
  return (
    <div className='w-full flex shadow-md min-h-20 bg-white rounded-lg p-5 font-roboto'>
      {/* Already Paid Section */}
      <div className='flex-1 border-r flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#fef3f3]'>
        <h3 className='text-red-600 font-bold text-2xl'>₹ {alReadyPay || '00'}</h3>
        <small className='text-xs text-gray-500'>Already Paid</small>
      </div>

      {/* Due Rent Section */}
      <div className='flex-1 border-l flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#f3fcf3]'>
        <h3 className='text-green-600 font-bold text-2xl'>₹ {deuRent || '00'}</h3>
        <small className='text-xs text-gray-500'>Due Rent</small>
      </div>
    </div>
  );
};

export default Dashboard;
