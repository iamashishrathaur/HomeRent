import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";
import { SiAdblock } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import DetailCard from './components/DetailCard';

const CustomerDetails = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full relative'>
        <div className='w-full bg-[#0652AD] shadow-md sticky top-0 z-50'>
        <div className='p-3 flex'>
          <div className='w-1/3 flex items-center'><IoIosArrowBack color='white' size={'30px'} className='cursor-pointer p-1' onClick={()=>navigate(-1)}/></div>
          <div className='w-1.3 flex items-center'><span className='text-white'>Ashish (7905321205)</span></div>      
        </div>
      </div>
      <div className='h-screen flex flex-col py-3 px-5'>
         <DetailCard/>
      </div>

      <div className='fixed w-full bottom-0 flex justify-between p-5 z-50'>
           <button className='bg-gray-500 hover:bg-slate-600 text-white px-5 py-[10px] rounded-full text-sm shadow-md flex gap-2 justify-center items-center' onClick={()=>{}}><SiAdblock />Block User</button>
           <button className='bg-[#9B224B] hover:bg-[#be285a] text-white px-5 py-[10px] rounded-full text-sm shadow-md flex gap-2 justify-center items-center' onClick={()=>{}}><MdAssignmentAdd />Add Rent</button>
      </div>
    </div>
  )
}

export default CustomerDetails