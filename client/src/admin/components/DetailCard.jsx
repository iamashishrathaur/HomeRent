import paymentLogo from '../assets/check_mark.png'

const DetailCard = () => {
   const rentType='Light bill';
   const date='01/09/2002';
   const amount='100'; 
   const transactionId='1111111';
   const isPaid=true 
  return (
    <div className='w-full bg-white flex flex-col shadow-md min-h-10 rounded p-[10px_15px] my-1 relative border'>
    <div className='flex font-medium pb-1 text-black items-center justify-between'>
      <p>{rentType}</p>
      <div className='flex-1 flex justify-end items-center text-sm font-semibold me-4'>
        <span className={isPaid ? 'text-red-600' : 'text-green-600'}>
          ₹ {amount}
        </span>
      </div>
    </div>
    
    <div className='flex gap-1'>
      <span className='w-full flex-1 font-medium text-sm text-gray-600 flex items-center justify-start'>
        Transaction ID
      </span>
      <div className='flex-1 absolute bottom-5 font-medium text-xs text-gray-600 flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2'>
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
            <button className='bg-[#0652AD] rounded-full px-[20px] py-[2px] text-white font-normal text-sm shadow-sm'>
              Paid
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

export default DetailCard