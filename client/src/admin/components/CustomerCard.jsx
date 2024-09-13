import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerCard = ({ name, phone, amount, status }) => {
  const navigate = useNavigate();

  const firstLetter = name && name.split(' ')[0].charAt(0).toUpperCase();

  const colorMap = {
    A: '#FF5733', B: '#33FF57', C: '#3357FF', D: '#F33F57', E: '#F3F557',
    F: '#57F3F3', G: '#F357F3', H: '#57F357', I: '#5733F3', J: '#F3A733',
    K: '#33A7F3', L: '#F3F357', M: '#57F357', N: '#A733F3', O: '#F35733',
    P: '#33F3B0', Q: '#F3B833', R: '#F33357', S: '#33F3F3', T: '#F3F3A7',
    U: '#A7F3F3', V: '#F3A7A7', W: '#A7F3A7', X: '#F3A733', Y: '#F3F3A7',
    Z: '#A733F3', default: '#0652AD'
  };

  const bgColor = colorMap[firstLetter] || colorMap.default;

  const handleClick = () => {
    navigate('/details', { state: { name, phone, amount, status } });
  };

  return (
    <div 
      className='w-full bg-white flex shadow-md min-h-10 rounded-lg p-4 my-2 relative border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105' 
      onClick={handleClick}
    >
      {/* Avatar */}
      <div className='w-1/6 flex justify-center items-center'>
        <div 
          className='rounded-full h-12 w-12 flex justify-center items-center text-white font-bold text-lg'
          style={{ backgroundColor: bgColor }}
        >
          {firstLetter}
        </div>
      </div>

      {/* Name and Phone */}
      <div className='flex-1 flex flex-col justify-center pl-3'>
        <p className='font-semibold text-lg text-gray-800'>{name}</p>
        <small className='text-gray-500'>{phone}</small>
      </div>

      {/* Amount and Status */}
      <div className='flex flex-col justify-center items-end'>
        <p className='font-bold text-lg text-green-600'>₹ {amount}</p>
        <small className={`text-xs font-medium ${status === 'Paid' ? 'text-green-500' : status === 'Overdue' ? 'text-red-500' : 'text-gray-400'}`}>
          {status}
        </small>
      </div>
    </div>
  );
};

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired, // Added dynamic status
};

CustomerCard.defaultProps = {
  name: 'Unknown',
  phone: 'N/A',
  amount: '00',
  status: 'Pending' // Default to "Pending"
};

export default CustomerCard;
