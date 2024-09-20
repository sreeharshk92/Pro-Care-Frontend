import React, { useEffect, useState } from 'react';
import banner from './banner.png';
import Navbar from '../Navbar/Navbar';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

function Orders() {
  const [data, setData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    bookingList();

    // Fetch notifications for the logged-in user
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  if (userInfo) {
    const userId = userInfo.id;
    const fetchNotifications = async () => {
      let result = await fetch(`http://127.0.0.1:8000/api/notifications/${userId}`);
      result = await result.json();
      setNotifications(result);
    };

    fetchNotifications();
  
  }

    
  }, []);

  const bookingList = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/bookinglist");
    result = await result.json();

    const formattedData = result.map(order => {
      const createdAt = new Date(order.created_at);
      const date = createdAt.toLocaleDateString();
      const time = createdAt.toLocaleTimeString();

      return {
        ...order,
        formattedDate: date,
        formattedTime: time,
      };
    });

    setData(formattedData);
  }

  const handleBookingClick = (order) => {
    navigate(`/bookingdetails/${order.id}`, { state: order });
  };


  

 

  return (
    <>
      <Navbar />
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-[#4a6ebc] opacity-70"></div>
        <div className="relative z-10 flex flex-col gap-3 items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">My Bookings</h1>
        </div>
      </div>

      <div className="py-5 px-[8rem] bg-[#F1F3F6]">
        <section className='flex justify-between'>
          <h1 className='mb-2 mt-3 text-sm font-medium text-gray-500'><Link to='/'><span className='hover:text-gray-600'>Home</span></Link> / My Bookings</h1>

          <div className='flex mb-2 w-[30rem]'>
            <input type="text" placeholder='Search for your bookings . . .' className='placeholder:text-[#667894] text-black bg-transparent w-full px-[1rem] py-[.7rem] border-1 border-[#686464] rounded-r-none rounded-l-md' />
            <div className='flex items-center justify-center rounded-r-md rounded-l-none w-[3.5rem] cursor-pointer bg-[#0BB8E3] hover:bg-cyan-400'>
              <IoSearch className='text-white text-[1.6rem]' />
            </div>
          </div>
        </section>

        <section>
          {data.map((order) =>
            <div key={order.id} className="grid grid-cols-1 grid-col md:grid-cols-1 lg:grid-cols-1 my-3 bg-white">

              <section onClick={() => handleBookingClick(order)} className="border flex justify-between border-gray-200 rounded-lg shadow-lg py-4 px-10">
                <div className='flex flex-col gap-4'>
                  <h2 className="font-semibold text-[1.4rem] mb-2">{order.service?.name}</h2>
                  <p className="font-semibold mb-2">Booking confirmed on {order.formattedDate} at {order.formattedTime}</p>
                  <p className="font-semibold mb-2 text-[1.2rem] flex"><MdCurrencyRupee className='mt-[.4rem] text-[1.2rem]' />{order.total_price}</p>

                  {/* Check if there's a matching notification */}
                  {notifications.filter((notif) => notif.order_id === order.id)
                    .map((notif) => (
                      <p className='text-[#3374de] font-semibold' key={notif.id}>{notif.message}</p>
                    ))}
                </div>

                <div className='border-2 w-[13.5rem]'>
                  <img src={"http://127.0.0.1:8000/" + order.service?.file_path} alt="img" />
                </div>
              </section>

            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Orders;
