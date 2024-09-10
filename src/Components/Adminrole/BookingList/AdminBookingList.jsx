import React, { useState, useEffect } from 'react'
import Adminsidebar from '../Adminsidebar'
import Adminheader from '../Adminheader'
import { IoSearch } from "react-icons/io5";

import { useLocation } from 'react-router-dom';

function AdminBookingList({ userId }) {
    const [data, setData] = useState([]);
    const [searchKey, setSearchKey] = useState([]);
    const [addresses, setAddresses] = useState({});
    const location = useLocation();

    useEffect(() => {
        bookingList();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            data.forEach(order => {
                fetchAddress(order.id);
            });
        }
    }, [data]);

    const fetchAddress = async (orderId) => {
        let result = await fetch(`http://127.0.0.1:8000/api/address-by-order/${orderId}`);
        result = await result.json();
        setAddresses(prevAddresses => ({
            ...prevAddresses,
            [orderId]: result
        }));
    };


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


    const updateBookingStatus = async (orderId, status) => {
        await fetch(`http://127.0.0.1:8000/api/booking/${orderId}/status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }),
        });
        bookingList();
    };



    const searchBooking = async (key) => {
        setSearchKey(key);
        if (key) {
            let result = await fetch("http://127.0.0.1:8000/api/searchBooking/" + key);
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
        } else {
            bookingList();
        }
    };

    //Send notifications
    const sendNotification = () => {
        const message = "Your booking has been confirmed!";  // Customize your message here

        fetch('http://127.0.0.1:8000/api/notifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                message: message,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Notification sent successfully!');
        })
        .catch(error => {
            console.error('There was an error sending the notification!', error);
        });
    };

    

    return (
        <>
            <div className="flex">
                <Adminsidebar />
                <div className="flex-1 flex bg-slate-200 flex-col">
                    <Adminheader />


                    <section className='p-5'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-xl'>Booking List</h1>
                            <div className='w-[20rem] flex '>
                                <input type="search" placeholder='Search for bookings. . .' onChange={(e) => searchBooking(e.target.value)} className='placeholder:text-[#667894] text-black font-medium bg-transparent w-full px-[1rem] py-[.7rem] border-1 border-[#686464] rounded-r-none rounded-l-md' />
                                <div className='flex items-center justify-center  rounded-r-md rounded-l-none w-[3.5rem] cursor-pointer bg-slate-900 hover:bg-slate-700'>
                                    <IoSearch className=' text-white  text-[1.6rem]' />

                                </div>
                            </div>

                        </div>
<section className='grid gap-3'>


                        {data.map((order) =>
                            <div key={order.id} className="grid grid-cols-1 grid-col md:grid-cols-1 lg:grid-cols-1 my-3 bg-white rounded-md">

                                <section className="border flex justify-between shadow-2xl  hover:shadow-black transition duration-700 ease-out rounded-md p-5">
                                    <div className='flex flex-col gap-4'>
                                        <h2 className="font-semibold text-[1.4rem] mt-3 mb-2">{order.service?.name}</h2>


                                        {addresses[order.id] ? (
                                            <address>
                                                <p>{addresses[order.id].first_name}</p>
                                                <p>{addresses[order.id].street_address}</p>
                                                <p>{addresses[order.id].city}, {addresses[order.id].state} {addresses[order.id].zip_code}</p>
                                                <p>{addresses[order.id].country}</p>
                                            </address>
                                        ) : (
                                            <p>Loading address...</p>
                                        )}
                                        <p className="font-semibold mb-2">Booked on  {order.formattedDate} at {order.formattedTime}</p>
                                        <p className="font-bold mb-2 text-[1.5rem] flex">₹{order.total_price}</p>
                                    </div>
                                    <section className='flex flex-col gap-4'>


                                        <div className=' w-[20rem]'>
                                            <img src={"http://127.0.0.1:8000/" + order.service?.file_path} alt="img" className='rounded-t-md' />

                                        </div>


                                        <div className='flex flex-col gap-3'>
                                            <button className='bg-blue-900 hover:bg-blue-950 text-white p-2 rounded-md' onClick={sendNotification} >Accept</button>
                                            <button className='bg-slate-600 hover:bg-slate-700 text-white p-2 rounded-md'>Reject</button>

                                        </div>

                                    </section>



                                </section>

                            </div>
                        )}
                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AdminBookingList
