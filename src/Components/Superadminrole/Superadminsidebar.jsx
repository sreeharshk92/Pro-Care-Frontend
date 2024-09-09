import React from 'react'
import { useNavigate } from 'react-router-dom';
function SuperAdminSidebar() {

  const Navigate=useNavigate();

  function logOut()
  {
    localStorage.clear();
    Navigate('/');
  }
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 text-2xl font-bold">Super Admin</div>
      <nav className="flex flex-col mt-4">
        <a href="#" className="px-4 py-2 hover:bg-gray-700">Dashboard</a>
        <a href="#" className="px-4 py-2 hover:bg-gray-700">Users</a>
        <a href="#" className="px-4 py-2 hover:bg-gray-700">Settings</a>
        <a href="#" className="px-4 py-2 hover:bg-gray-700">Reports</a>
        <a href="#" className="px-4 py-2 hover:bg-gray-700" onClick={logOut}>Log Out</a>
      </nav>
    </div>
  )
}

export default SuperAdminSidebar
