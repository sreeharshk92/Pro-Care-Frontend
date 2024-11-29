import React, { useState } from 'react'
import {IoSearch  } from "react-icons/io5";
import banner from './banner.png'
function ServicesBanner({ setSearchResults }) {

  const [data,setData] = useState([]);

  
  const searchService = async(key) => {

    let result = await fetch("http://127.0.0.1:8000/api/searchService/"+key)
    result = await result.json();
    setSearchResults(result);
  }


  return (
    <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage:`url(${banner})` }}>
    <div className="absolute inset-0 bg-[#4a6ebc] opacity-70"></div>
    <div className="relative z-10 flex items-center justify-center h-full">

<section className='w-[37rem] h-[11rem] border rounded-md bg-white gap-3 flex flex-col justify-center items-center'>

<h1 className=" text-4xl font-bold text-[#434343]">Start by choosing a service.</h1>

<div className='w-[29rem] flex '>
  <input type="search" placeholder='Search for a service (e.g "cleaning")' onChange={(e)=>searchService(e.target.value)} className='placeholder:text-[#667894] text-black font-medium bg-transparent w-full px-[1rem] py-[.7rem] border-1 border-[#686464] rounded-r-none rounded-l-md' />
  <div className='flex items-center justify-center  rounded-r-md rounded-l-none w-[3.5rem] cursor-pointer bg-[#0BB8E3] hover:bg-cyan-400'>
  <IoSearch className=' text-white  text-[1.6rem]'/>

  </div>
</div>
</section>
    </div>
  </div>
  )
}

export default ServicesBanner
