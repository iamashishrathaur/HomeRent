import React from 'react'

const Dashboard = ({ alReadyPay, deuRent }) => {
  return (
    <div className='w-full flex flex-wrap shadow-md min-h-20 bg-white rounded p-5 font-[Roboto]'>
      <div className='flex-1 border-r flex flex-col justify-center items-center'>
        <h3 className='text-red-600 font-bold text-lg'>₹ {alReadyPay || '00'}</h3>
        <small className='text-xs'>Already paid</small>
      </div>
      <div className='flex-1 border-l flex flex-col justify-center items-center'>
        <h3 className='text-green-600 font-bold text-lg'>₹ {deuRent || '00'}</h3>
        <small className='text-xs'>Due rent</small>
      </div>
    </div>
  )
}

export default Dashboard
