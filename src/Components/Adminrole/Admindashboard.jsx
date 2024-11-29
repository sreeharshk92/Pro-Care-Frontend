import React from 'react'
import Adminsidebar from './Adminsidebar'
import Adminheader from './Adminheader'

function Admindashboard() {
  return (
    <>
    
        <Adminsidebar />
        <Adminheader />
        <div>
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

    </>
  )
}

export default Admindashboard
