import React, { useState } from 'react';
import DashBoard from './components/DashBoard';
import { FaUserPlus } from 'react-icons/fa';
import CustomerCard from './components/CustomerCard';
import { useNavigate } from 'react-router-dom';
import AddCustomer from './AddCustomer';

const Home = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <div className='relative w-full min-h-screen bg-gray-100'>
      {/* Header */}
      <div className='w-full bg-[#0652AD] shadow-md sticky top-0 z-50'>
        <div className='p-5 flex justify-between items-center'>
          <span className='text-white text-lg font-bold'>Ashish (7905321205)</span>
        </div>

        <div className='w-full p-5'>
          <DashBoard isReceived={''} pending={''} />
        </div>
      </div>

      {/* Customer Cards */}
      <div className='px-5 pt-3'>
        <CustomerCard
          name='Ashish Kumar'
          phone='9123456789'
          amount='5000'
          status='Paid'
        />
        <CustomerCard
          name='Rahul Sharma'
          phone='9984493912'
          amount='200'
          status='Pending'
        />
        <CustomerCard
          name='Charlie Brown'
          phone='9823492349'
          amount='300'
          status='Paid'
        />
      </div>

      {/* Floating Add Button */}
      <button
        className='fixed bottom-5 right-5 bg-[#9B224B] hover:bg-[#be285a] text-white px-6 py-3 rounded-full text-sm shadow-md flex gap-2 items-center transition-all duration-300 transform hover:scale-105'
        onClick={() => setIsOpen(true)}
      >
        <FaUserPlus size={16} />
        ADD CUSTOMERS
      </button>
      <AddCustomer show={isOpen} onClose={closeModal}/>
    </div>
  )
}

export default Home