import React from 'react'
import Admindashboard from './Admindashboard'
import Adminheader from './Adminheader'
import Adminsidebar from './Adminsidebar'

function Adminhome() {
  return (
    <div className="flex">
      <Adminsidebar />
      <div className="flex-1 flex flex-col ">
        <Adminheader />
        <main className="flex-1 bg-gray-100 p-4">
        <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded">Card 1</div>
                <div className="bg-white p-4 shadow rounded">Card 2</div>
                <div className="bg-white p-4 shadow rounded">Card 3</div>
              </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Adminhome
