import React from 'react'
import logo from './logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import Notifications from '../Notifications/Notifications';


function Navbar() {

    function logOut() {
        localStorage.clear();
        navigate("/");
    }

    const navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem('user-info'));

    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleNotification = () => {
        setOpen(!open);
    };

    const closeNotification = () => {
        setOpen(false);
    }


    return (
        <nav className='h-24 antialiased sticky top-0 z-50  bg-white shadow-xl '>

            <div className='flex justify-between text-sm font-medium py-3 px-32'>
                <img src={logo} alt="logo" className='w-44' />
                <ul className='mt-7 flex gap-16'>
                    <li>
                        <Link to='/home' className='hover:text-blue-900'>Home </Link>
                    </li>
                    <li>
                        <Link to='/services' className='hover:text-blue-900'>Services</Link>
                    </li>
                    <li>
                        <Link to='/about' className='hover:text-blue-900'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='hover:text-blue-900'>Contact Us</Link>
                    </li>

                    <li>
                        <Link to='/orders' className='hover:text-blue-900'>Bookings</Link>
                    </li>
                    <li>
                        <Link to='/chat' className='hover:text-blue-900'>Chat</Link>
                    </li>
                </ul>




                <div className="relative text-left flex items-center gap-3">
                    <div className='flex gap-3'>

                    <button type="button" onClick={toggleNotification} className="flex items-center hover:border hover:rounded-full hover:border-slate-500">
                        <IoIosNotificationsOutline className='hover:text-blue-900 text-[1.6rem]' />
                    </button>
                    

                        <Link to='/cart' className='hover:text-blue-900 text-[1.6rem]'><PiShoppingCartLight /></Link>

                    </div>
                    <button type="button" onClick={toggleDropdown} className="flex items-center hover:border hover:rounded-full hover:border-slate-500">
                        <AiOutlineUser className='hover:text-blue-900 text-[1.6rem]' />
                    </button>
                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-[10rem] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className="py-1" role="none">
                                <a href="/profile" className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200" role="menuitem">👤{user && user.name}</a>
                                <a href="/settings" className="block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-200" role="menuitem">Settings</a>
                                <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" onClick={logOut}>Log out</a>
                            </div>
                        </div>
                    )}
                </div>



            </div>

            {open && (
                        <div className="origin-top-right absolute min-h-screen right-0 w-[28rem] top-0  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
                            <div role="none">
                                <Notifications close={closeNotification}/>
                            </div>
                        </div>
                    )}
        </nav>
    )
}

export default Navbar
