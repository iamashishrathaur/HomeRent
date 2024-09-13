import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerCard = ({ name, phone, amount}) => {
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
    navigate('/details', { state: { name, phone, amount } });
  };

  return (
    <div 
      className='w-full bg-white flex shadow-md min-h-10 rounded p-[10px_15px] my-[5px] relative border cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.01] ' 
      onClick={handleClick}
    >
        <div className='w-1/6'> 
          <div 
            className='rounded-full h-11 w-11 flex justify-center items-center text-white font-bold text-base'
            style={{ backgroundColor: bgColor }}
          >
            {firstLetter}
          </div>
        </div>
        <div className='w-[60%] flex flex-col'>
             <p className='font-medium text-base'>{name}</p>
             <small className='text-gray-500'>{phone}</small>
        </div>
        <div className='w-[23.333%] flex flex-col items-end'>
           <p className='font-bold text-base text-green-600'>₹ {amount}</p>
           <small className='text-gray-400'>Pending</small>
        </div>
    </div>
  );
};

CustomerCard.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  amount: PropTypes.string
};

CustomerCard.defaultProps = {
  name: 'Unknown',
  phone: 'N/A',
  amount: '00'
};

export default CustomerCard;
