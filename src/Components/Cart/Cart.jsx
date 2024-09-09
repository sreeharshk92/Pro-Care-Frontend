import React, { useEffect, useState } from 'react'
import banner from './banner.png'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'

function Cart() {

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getCarList();
  }, []);

  const getCarList = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/getCartList');
    const result = await response.json();
    setCartData(result);
  };


  const handleDeleteCart = async (id) => {
    let result = await fetch("http://127.0.0.1:8000/api/deleteCart/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    getCarList();
  }

  return (
    <>
      <Navbar />
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-[#4a6ebc] opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">My Carts</h1>
        </div>
      </div>

      <div className="py-5 px-[8rem] bg-[#F1F3F6] ">
        <section className='flex justify-between pb-3'>
          <h1 className='mb-2 mt-3 text-sm font-medium text-gray-500'><Link to='/'><span className='hover:text-gray-600'>Home</span></Link> / My Carts</h1>

          <div className='flex mb-2 w-[30rem]'>
            <input type="search" placeholder='Search for your carts . . .' className='placeholder:text-[#667894] text-black bg-transparent w-full px-[1rem] py-[.7rem] border-1 border-[#686464] rounded-r-none rounded-l-md' />
            <div className='flex items-center justify-center  rounded-r-md rounded-l-none w-[3.5rem] cursor-pointer bg-[#0BB8E3] hover:bg-cyan-400'>
              <IoSearch className=' text-white  text-[1.6rem]' />
            </div>
          </div>
        </section>



        <section className="flex flex-col gap-4">
          {
            cartData.map((cart)=>
              <div key={cart.id} className="flex rounded-lg overflow-hidden py-5 bg-white">
            <div className="w-1/2 py-2 px-5">
              <img src={"http://127.0.0.1:8000/" + cart.service.file_path} alt="Service Image" className="object-cover w-full rounded-md bg-yellow-300" />
            </div>

            <div className="w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">{cart.service.name}</h2>

              <p className="text-gray-700 mb-4">{cart.service.description}</p>

              <p className="text-xl font-semibold text-gray-800 mb-6">₹{cart.service.price}</p>

              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600">Book Now</button>
              <button onClick={()=>handleDeleteCart(cart.id)} className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Remove from Cart</button>
            </div>

            <div>

            </div>
          </div>
            )
          }
          
        </section>
      </div>
    </>
  )
}

export default Cart
