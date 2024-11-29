import React, { useState } from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from './logo.png';
import Notifications from '../Notifications/Notifications';
import { MdKeyboardArrowRight } from "react-icons/md";


function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    let user = JSON.parse(localStorage.getItem('user-info'));

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleNotification = () => {
        setOpen(!open);
    };

    const closeNotification = () => {
        setOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="antialiased sticky top-0 z-50 bg-white shadow-2xl ">
            <div className="flex justify-between items-center py-3  text-sm    custom:px-20">
                {/* <h1 className='title'>Pro Care</h1> */}
                <img src={logo} alt="logo" className="w-32 custom:w-44" />
                
                <div className="custom:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
                    </button>
                </div>

                {/* Regular Menu */}
                <ul className={`custom:flex gap-16 hidden ${menuOpen ? 'block' : 'hidden'} custom:block`}>
                    <li><Link to='/home' className='hover:text-blue-900'>Home</Link></li>
                    <li><Link to='/services' className='hover:text-blue-900'>Services</Link></li>
                    <li><Link to='/about' className='hover:text-blue-900'>About Us</Link></li>
                    <li><Link to='/contact' className='hover:text-blue-900'>Contact Us</Link></li>
                    <li><Link to='/orders' className='hover:text-blue-900'>Bookings</Link></li>
                </ul>

                <div className="relative text-left items-center gap-3 hidden custom:flex">
                    <div className="flex gap-3">
                        <button type="button" onClick={toggleNotification} className="flex items-center hover:border hover:rounded-full hover:border-slate-500">
                            <IoIosNotificationsOutline className="hover:text-blue-900 text-[1.6rem]" />
                        </button>
                        <Link to='/cart' className="hover:text-blue-900 text-[1.6rem]">
                            <PiShoppingCartLight />
                        </Link>
                    </div>

                    <button type="button" onClick={toggleDropdown} className="flex items-center hover:border hover:rounded-full hover:border-slate-500">
                        <AiOutlineUser className="hover:text-blue-900 text-[1.6rem]" />
                    </button>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-[10rem] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className="py-1" role="none">
                                <a href="/profile" className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200" role="menuitem">
                                    👤{user && user.name}
                                </a>
                                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem">
                                    Settings
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" onClick={logOut}>
                                    Log out
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="custom:hidden flex flex-col gap-4 mt-2.5 min-h-screen text-white py-4 px-[2.2rem]   text-start bg-slate-800">
                    <li><Link to='/home' className='hover:text-slate-400 flex items-center justify-between' onClick={toggleMenu}>Home <MdKeyboardArrowRight className='text-2xl' /></Link></li>
                    <li><Link to='/services' className='hover:text-slate-400 flex items-center justify-between' onClick={toggleMenu}>Services <MdKeyboardArrowRight className='text-2xl' /></Link></li>
                    <li><Link to='/about' className='hover:text-slate-400 flex items-center justify-between' onClick={toggleMenu}>About Us <MdKeyboardArrowRight className='text-2xl' /></Link></li>
                    <li><Link to='/contact' className='hover:text-slate-400 flex items-center justify-between' onClick={toggleMenu}>Contact Us <MdKeyboardArrowRight className='text-2xl' /></Link></li>
                    <li><Link to='/orders' className='hover:text-slate-400 flex items-center justify-between' onClick={toggleMenu}>Bookings <MdKeyboardArrowRight className='text-2xl' /></Link></li>
                    <li>
                        <div className="flex py-2 gap-8">
                            <button type="button" onClick={toggleNotification} className="hover:text-slate-400">
                                <IoIosNotificationsOutline className="text-[1.6rem]" />
                            </button>
                            <Link to='/cart' className="hover:text-slate-400">
                                <PiShoppingCartLight className="text-[1.6rem]" />
                            </Link>
                            <button type="button" onClick={toggleDropdown} className="hover:text-slate-400">
                                <AiOutlineUser className="text-[1.6rem]" />
                            </button>
                        </div>
                    </li>
                </ul>
            )}

            {open && (
                <div className="origin-top-right absolute min-h-screen right-0 w-[28rem] top-0 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
                    <div role="none">
                        <Notifications close={closeNotification} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
