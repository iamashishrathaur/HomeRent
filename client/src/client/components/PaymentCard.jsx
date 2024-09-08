import React from 'react'
import paymentLogo from '../assets/check_mark.png'

const PaymentCard = ({ rentType, date, amount, transactionId, isPaid }) => {
  return (
    <div className='w-full bg-white flex flex-col shadow-md min-h-10 rounded p-[10px_15px] my-1 relative border'>
      <div className='flex font-medium pb-1 text-blue-600 items-center justify-between'>
        <p>{rentType}</p>
        <div className='flex-1 flex justify-end items-center text-sm font-semibold me-4'>
          <span className={isPaid ? 'text-red-600' : 'text-green-600'}>
            ₹ {amount}
          </span>
        </div>
      </div>
      
      <div className='flex gap-1'>
        <span className='w-full flex-1 font-medium text-sm flex items-center justify-start'>
          Transaction ID
        </span>
        <div className='flex-1 font-medium text-xs text-gray-600 flex gap-1 items-center justify-center'>
          <span>{date}</span>
          <strong>to</strong>
          <span>{date}</span>
        </div>
        <div className='flex-1 flex justify-end items-center'>
          <div className='absolute bottom-[10px] right-[20px]'>
            {isPaid ? (
              <img
                src={paymentLogo}
                className='w-9 h-9 me-2'
                alt='Payment successful'
              />
            ) : (
              <button className='bg-[#0652AD] rounded-full px-[15px] py-[1px] text-white font-normal text-sm shadow-sm'>
                Pay
              </button>
            )}
          </div>
        </div>
      </div>

      <div className='flex'>
        <small className='flex items-center font-normal text-xs text-gray-600'>
          {transactionId}
        </small>
      </div>
    </div>
  )
}

export default PaymentCard
