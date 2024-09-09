import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FaFileAlt } from "react-icons/fa";
import { Link, useLocation, useParams } from 'react-router-dom';
import './BookingDetails.css'
import Footer from '../Footer/Footer';
function BookingDetails() {
    const { id } = useParams();
    const location = useLocation();
    const order = location.state;
    const [address, setAddress] = useState(null);


    useEffect(() => {
        if (order) {
            fetchAddress(order.id); 
        }
    }, [order]);

    const fetchAddress = async (orderId) => {
        let result = await fetch(`http://127.0.0.1:8000/api/address-by-order/${orderId}`);
        result = await result.json();
        setAddress(result);
    };


    return (
        <>
            <Navbar />

            <div className="container mx-auto p-[4rem] bg-[#F1F3F6]">
                <h1 className='mb-2 mt-3 text-sm font-medium absolute top-[5.5rem] text-gray-500'>
                    <Link to='/'><span className='hover:text-gray-600 '>Home</span></Link>
                    <Link to='/orders'><span className='hover:text-gray-600'> / My Bookings </span></Link>
                    / ID{id}
                </h1>

                {/* First Card */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex justify-between">
                    {/* Delivery Address */}
                    <div className="w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
                        {address ? (
                            <address>
                                <p>{address.first_name}</p>
                                <p>{address.street_address}</p>
                                <p>{address.city}, {address.state} {address.zip_code}</p>
                                <p>{address.country}</p>
                            </address>
                        ) : (
                            <p>Loading address...</p>
                        )}
                    </div>

                    {/* Download Invoice */}
                    <div className="items-center justify-center flex">
                        <div className='flex justify-between gap-[10rem] items-center bg-[#F1F3F6] px-4 py-2'>
                            <h1 className='flex items-center'><FaFileAlt className=' text-blue-900' />Invoice details</h1>
                            <button className="bg-blue-500 text-white py-1 px-4 rounded-sm hover:bg-blue-600">Download Invoice</button>

                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <main className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
                    <section className='flex gap-4 w-[30rem]'>
                        <div className="border-2 h-[10rem] w-[10rem]">
                            <img src={"http://127.0.0.1:8000/" + order.service?.file_path} alt="Service" />
                        </div>
                        <div className=' w-[15rem]'>
                            <h2 className="text-lg font-semibold mb-2">{order.service?.name}</h2>
                            <p>Quantity: {order.quantity}</p>
                            <p>Total Price: ₹{order.total_price}</p>
                        </div>

                    </section>

                    {/* Order Status section */}
                    <div className="container w-1/">
                        <div className="row">
                            <div className="col-12 col-md-10 hh-grayBox pt45 pb20">
                                <div className="row justify-content-between">
                                    <div className="order-tracking completed">
                                        <span className="is-complete"></span>
                                        <p>Booked<br /><span>{order.formattedDate}</span></p>
                                    </div>
                                    <div className="order-tracking completed">
                                        <span className="is-complete"></span>
                                        <p>In Progress<br /><span></span></p>
                                    </div>
                                    <div className="order-tracking">
                                        <span className="is-complete"></span>
                                        <p>Completed<br /><span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Review and Chat Section */}
                    <div className="w-1/4 text-right">
                        <div className="mb-4">
                            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">
                                Write a Review
                            </button>
                        </div>
                        <div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                                Chat with Us
                            </button>
                        </div>
                    </div>
                </main>

            </div>
            <Footer></Footer>
        </>
    )
}

export default BookingDetails
