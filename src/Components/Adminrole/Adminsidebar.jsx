import React from 'react'
import './Adminsidebar.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/admin-logo.png'
import { ImUsers } from "react-icons/im";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoMdAdd, IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi2";
import { GiVacuumCleaner } from "react-icons/gi";
import { SlPeople } from "react-icons/sl";
import { BsCalendarCheck } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";











function Adminsidebar() {

    const navigate = useNavigate();

    const logOut=()=>{
        localStorage.clear();
        navigate('/')
    }

    return (
   
        
            <div className="bg-gray-900 p-3 text-white w-64 min-h-screen flex gap-4 flex-col">
                <div className=''>
                <img src={logo} alt="logo" className="w-32 custom:w-44" />
                </div>
                {/* <div className="p-4 text-3xl font-bold">Pro Care</div> */}
                <div className="flex flex-col">
                    <Link to='/dashboard'className="side-links"><HiOutlineHome className='side-icons-1' />Dashboard</Link>
                    <Link to='/dashboard/users'className="side-links"><SlPeople className='side-icons' />Users</Link>
                    <Link to='/dashboard/services' className="side-links"><GiVacuumCleaner className='side-icons-3' />Services</Link>
                    <Link to='/dashboard/bookings' className="side-links"><BsCalendarCheck className='side-icons' />Bookings</Link>

                    <Link to='/dashboard/addservice' className="side-links"><IoMdAdd className='side-icons' />Add Service</Link>
                    <a href="/settings" className="side-links"><IoSettingsOutline className='side-icons' />Settings</a>
                    <a href="/logout" className="side-links" onClick={logOut}><BiLogOut className='side-icons' />Log Out</a>
                </div>
            </div>

         
            
    )
}

export default Adminsidebar
