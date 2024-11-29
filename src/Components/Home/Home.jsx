import React from 'react'
import Navbar from '../Navbar/Navbar'
import OurTeam from '../OurTeam/OurTeam'
import UserChat from '../ChatBot/UserChat'
import './Home.css'
function Home() {
  return (
    <>
    <Navbar />
    <UserChat />
    



    <div className='bg-home-pic bg-center bg-cover h-[42.5rem] flex flex-col justify-center items-center'>
      <h1 className='text-shadow text-6xl text-white w-[55rem] text-center font-bold'>"Easy way to keep your home and office in perfect shape."</h1>
      <div className='flex gap-10 mt-6'>
      <input type="text" placeholder='🧤Search for a service' className='py-1 px-4 border-2 rounded-md placeholder:text-black hover:border-black focus:border-blue-500 focus:outline-none'/>
      <input type="text" placeholder='📍Search by location' className='py-1 px-4 border-2 rounded-md placeholder:text-black hover:border-black focus:border-blue-500 focus:outline-none'/>
      </div>  
    </div>



    <section className="container mx-auto py-12 px-6">
        <h2 className="subtitle text-3xl font-bold text-center mb-8">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <img className="h-40 w-full object-cover rounded-t-md" src="featured-service-1.jpg" alt="Featured Service 1"/>
                <h3 className="text-xl font-semibold mt-4">Featured Service 1</h3>
                <p className="mt-2 text-gray-600">Detailed description of the featured service provided.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <img className="h-40 w-full object-cover rounded-t-md" src="featured-service-2.jpg" alt="Featured Service 2"/>
                <h3 className="text-xl font-semibold mt-4">Featured Service 2</h3>
                <p className="mt-2 text-gray-600">Detailed description of the featured service provided.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <img className="h-40 w-full object-cover rounded-t-md" src="featured-service-3.jpg" alt="Featured Service 3"/>
                <h3 className="text-xl font-semibold mt-4">Featured Service 3</h3>
                <p className="mt-2 text-gray-600">Detailed description of the featured service provided.</p>
            </div>
        </div>
    </section>

                


    <OurTeam></OurTeam>

    
    

    
    </>
  )
}

export default Home

