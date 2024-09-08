import React from 'react'
import PaymentCard from './components/PaymentCard'
import DashBoard from './components/DashBoard'

const Home = () => {
  const item = [
    {
      amount: 2300,
      isPaid: false,
      date: '1/2/2025',
      rentType: 'Room Rent',
      transactionId: '338021113'
    },
    {
      amount: 200,
      isPaid: false,
      date: '1/2/2025',
      rentType: 'Light Bill',
      transactionId: '338021113'
    },
    {
      amount: 2300,
      isPaid: true,
      date: '1/2/2025',
      rentType: 'Room Rent',
      transactionId: '338021113'
    },
    {
      amount: 230,
      isPaid: false,
      date: '1/2/2025',
      rentType: 'Light Bill',
      transactionId: '338021113'
    }
  ]

  // Calculate due rent (unpaid amounts)
  const deuRent = item
    .filter(item => !item.isPaid)
    .reduce((total, currentItem) => total + currentItem.amount, 0)

  // Calculate already paid rent
  const alReadyPay = item
    .filter(item => item.isPaid)
    .reduce((total, currentItem) => total + currentItem.amount, 0)

  return (
    <div>
      <div className='w-full bg-[#0652AD] shadow-md sticky top-0 z-50'>
        <div className='p-5'>
          <span className='text-white'>Ashish (7905321205)</span>
        </div>
        <div className='w-full p-5'>
          <DashBoard alReadyPay={alReadyPay} deuRent={deuRent} />
        </div>
      </div>
      <div className='w-full flex flex-col min-h-screen p-5'>
        {item.map((item, index) => (
          <PaymentCard
            key={index}
            amount={item.amount}
            date={item.date}
            isPaid={item.isPaid}
            rentType={item.rentType}
            transactionId={item.transactionId}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
