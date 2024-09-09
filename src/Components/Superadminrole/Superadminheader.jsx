import React from 'react'

function SuperAdminHeader() {

  let superadmin = JSON.parse(localStorage.getItem('superadmin-info')) 
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="px-4 py-2 border rounded" />
        <h1 className='font-bold'>{}</h1>
        <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
      </div>
    </header>
  )
}

export default SuperAdminHeader
