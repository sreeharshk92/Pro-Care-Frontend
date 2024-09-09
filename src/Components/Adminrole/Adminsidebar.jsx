import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Adminsidebar() {

    const navigate = useNavigate();

    const logOut=()=>{
        localStorage.clear();
        navigate('/')
    }

    return (
   
        
            <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
                <div className="p-4 text-xl font-bold">Admin Dashboard</div>
                <nav className="flex flex-col mt-4">
                    <Link to='/Adminhome'className="px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                    <Link to='/AdminUsers'className="px-4 py-2 hover:bg-gray-700">Users</Link>
                    <Link to='/ServicesList' className="px-4 py-2 hover:bg-gray-700">Services List</Link>
                    <Link to='/adminbookinglist' className="px-4 py-2 hover:bg-gray-700">Booking List</Link>

                    <Link to='/AddService' className="px-4 py-2 hover:bg-gray-700">Add Service</Link>
                    <a href="#" className="px-4 py-2 hover:bg-gray-700">Settings</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-700" onClick={logOut}>Log Out</a>
                </nav>
            </div>

         
            
    )
}

export default Adminsidebar
