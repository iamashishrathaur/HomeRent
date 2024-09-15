import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdAssignmentAdd } from 'react-icons/md';
import { SiAdblock } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import DetailCard from './components/DetailCard';
import AddRent from './components/AddRent'; // Import AddRent component

const CustomerDetails = () => {
  const navigate = useNavigate();
  const [showAddRentModal, setShowAddRentModal] = useState(false); // State to control AddRent modal

  // Function to handle closing the AddRent modal
  const handleCloseModal = () => {
    setShowAddRentModal(false);
  };

  return (
    <div className='w-full min-h-screen bg-gray-100'>
      {/* Header Section */}
      <div className='w-full bg-[#0652AD] shadow-md sticky top-0 z-50'>
        <div className='p-4 flex items-center'>
          <IoIosArrowBack
            color='white'
            size={30}
            className='cursor-pointer p-1'
            onClick={() => navigate(-1)}
          />
          <span className='text-white ml-4 text-lg font-semibold'>
            Ashish (7905321205)
          </span>
        </div>
      </div>

      {/* Detail Section */}
      <div className='py-6 px-5'>
        <DetailCard />
      </div>

      {/* Action Buttons */}
      <div className='fixed bottom-0 w-full bg-white py-4 px-5 flex justify-between shadow-lg'>
        <button
          className='bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded-full text-sm font-medium flex gap-2 items-center transition duration-200'
          onClick={() => {}}
        >
          <SiAdblock size={20} />
          Block User
        </button>
        <button
          className='bg-[#9B224B] hover:bg-[#be285a] text-white px-5 py-3 rounded-full text-sm font-medium flex gap-2 items-center transition duration-200'
          onClick={() => setShowAddRentModal(true)} // Show the AddRent modal when clicked
        >
          <MdAssignmentAdd size={20} />
          Add Rent
        </button>
      </div>

      {/* Add Rent Modal */}
      {showAddRentModal && (
        <AddRent show={showAddRentModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CustomerDetails;
