import React, { useMemo } from 'react';
import PaymentCard from './components/PaymentCard';
import DashBoard from './components/DashBoard';

const Home = () => {
  const item = [
    { amount: 2300, isPaid: false, date: '1/2/2025' , rentType: 'Room Rent', transactionId: '338021113455665' },
    { amount: 200, isPaid: false, date: '1/2/2025', rentType: 'Light Bill', transactionId: '338021113' },
    { amount: 2300, isPaid: true, date: '1/2/2025', rentType: 'Room Rent', transactionId: '338021113' },
    { amount: 230, isPaid: false, date: '1/2/2025', rentType: 'Light Bill', transactionId: '338021113' }
  ];

  // Memoize the calculations to avoid recomputation
  const deuRent = useMemo(() => item
    .filter(item => !item.isPaid)
    .reduce((total, currentItem) => total + currentItem.amount, 0), [item]);

  const alReadyPay = useMemo(() => item
    .filter(item => item.isPaid)
    .reduce((total, currentItem) => total + currentItem.amount, 0), [item]);

  return (
    <div className='w-full min-h-screen'>
      {/* Header */}
      <div className='w-full bg-[#0652AD] shadow-md sticky top-0 z-50'>
        <div className='p-5'>
          <span className='text-white text-lg font-bold'>Ashish (7905321205)</span>
        </div>
        <div className='w-full p-5'>
          <DashBoard alReadyPay={alReadyPay} deuRent={deuRent} />
        </div>
      </div>

      {/* Payment Cards */}
      <div className='w-full flex flex-col px-5 pt-3'>
        {item && item.length > 0 ? item.map((payment, index) => (
          <PaymentCard
            key={index}
            amount={payment.amount}
            date={payment.date}
            endDate={payment.date}
            isPaid={payment.isPaid}
            rentType={payment.rentType}
            transactionId={payment.transactionId}
          />
        )) : (
          <div className='flex justify-center'>
            <span className='text-gray-500'>No payment records found</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
