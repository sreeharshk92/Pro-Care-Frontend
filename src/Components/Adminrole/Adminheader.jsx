import React from 'react'

function Adminheader() {

  let admin = JSON.parse(localStorage.getItem('admin-info'));

  return (
    <header className="bg-white shadow-2xl p-4 flex justify-between items-center sticky top-0">
      <div className="text-xl font-bold">Dashboard</div>
      <h1 className='font-bold'>{admin && admin.name}👤</h1>
    </header>
  )
}

export default Adminheader
