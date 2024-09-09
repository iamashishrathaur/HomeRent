import React from 'react'
import DashBoard from './components/DashBoard'
import { FaUserPlus } from 'react-icons/fa'
import CustomerCard from './components/CustomerCard'

const Home = () => {

  return (
    <div className='relative w-full min-h-screen'>
      <div className='w-full bg-[#0652AD] shadow-md sticky top-0 z-50'>
        <div className='p-5'>
          <span className='text-white'>Ashish (7905321205)</span>
        </div>
        <div className='w-full p-5'>
          <DashBoard isReceived={''} pending={''} />
        </div>
      </div>

      <div className='p-5'> 

      <CustomerCard name="Ashish Kumar" phone="9123456789" amount="5000" status="Paid" />
      <CustomerCard name="Rahul Sharma" phone="9984493912" amount="200" status="Pending" />
      <CustomerCard name="Charlie Brown" phone="9823492349" amount="300" status="Paid" />
      </div>

      <button className='absolute bottom-5 right-5 bg-[#9B224B] text-white px-5 py-[10px] rounded-full text-sm shadow-md flex gap-2 justify-center items-center'><FaUserPlus/> ADD CUSTOMERS</button>
    </div>
  )
}

export default Home