import React from 'react';

// Function to get a color based on the first letter of the name
const getColorForLetter = (letter) => {
  // Define a color mapping for each letter
  const colorMap = {
    A: '#FF5733',  // Orange
    B: '#33FF57',  // Green
    C: '#3357FF',  // Blue
    D: '#F33F57',  // Pink
    E: '#F3F557',  // Yellow
    F: '#57F3F3',  // Teal
    G: '#F357F3',  // Purple
    H: '#57F357',  // Light Green
    I: '#5733F3',  // Indigo
    J: '#F3A733',  // Coral
    K: '#33A7F3',  // Sky Blue
    L: '#F3F357',  // Light Yellow
    M: '#57F357',  // Lime
    N: '#A733F3',  // Violet
    O: '#F35733',  // Salmon
    P: '#33F3B0',  // Aqua
    Q: '#F3B833',  // Gold
    R: '#F33357',  // Red
    S: '#33F3F3',  // Cyan
    T: '#F3F3A7',  // Light Olive
    U: '#A7F3F3',  // Pale Cyan
    V: '#F3A7A7',  // Light Pink
    W: '#A7F3A7',  // Mint Green
    X: '#F3A733',  // Orange
    Y: '#F3F3A7',  // Light Yellow
    Z: '#A733F3',  // Dark Purple
    default: '#0652AD'  // Default blue color
  };
  
  // Return color for the letter or default color
  return colorMap[letter] || colorMap.default;
};

const CustomerCard = ({ name = 'Unknown', phone = 'N/A', amount = '00' }) => {
  // Get the first letter of the first name
  const firstLetter = name && name.split(' ')[0].charAt(0).toUpperCase();
  
  // Get color based on the first letter
  const bgColor = getColorForLetter(firstLetter);

  return (
    <div className='w-full bg-white flex shadow-md min-h-10 rounded p-[10px_15px] my-[5px] relative border'>
        <div className='w-1/6'> 
          <div 
            className='rounded-full h-11 w-11 flex justify-center items-center text-white font-bold text-base'
            style={{ backgroundColor: bgColor }}
          >
            {/* Display the first letter of the first name */}
            {firstLetter}
          </div>
        </div>
        <div className='w-[60%] flex flex-col'>
             <p className='font-medium  text-base'>{name}</p>
             <small className='text-gray-500'>{phone}</small>
        </div>
        <div className='w-[23.333%] flex flex-col items-end'>
           <p className='font-bold text-base text-green-600'>₹ {amount}</p>
           <small className='text-gray-400'>Pending</small>
        </div>
    </div>
  );
};

export default CustomerCard;
