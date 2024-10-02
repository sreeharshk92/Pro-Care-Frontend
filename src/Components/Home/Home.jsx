import React from 'react'
import homepic from './homepic.jpg'
import Navbar from '../Navbar/Navbar'
import OurTeam from '../OurTeam/OurTeam'
import ChatCircle from '../ChatBot/ChatCircle'
function Home() {
  return (
    <>
    <Navbar/>
    <ChatCircle />
    



    <div className='bg-home-pic bg-center bg-cover h-[42.5rem] flex flex-col justify-center items-center'>
      <h1 className='text-shadow text-6xl text-white w-[55rem] text-center font-bold'>"Easy way to keep your home and office in perfect shape."</h1>
      <div className='flex gap-10 mt-6'>
      <input type="text" placeholder='🧤Search for a service' className='py-1 px-4 border border-2 rounded-md placeholder:text-black hover:border-black focus:border-blue-500 focus:outline-none'/>
      <input type="text" placeholder='📍Search by location' className='py-1 px-4 border border-2 rounded-md placeholder:text-black hover:border-black focus:border-blue-500 focus:outline-none'/>
      </div>  
    </div>



    <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Popular Services</h2>
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
{/* 
    <section className="bg-gray-800 text-white py-12 px-20">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-8">What Our Clients Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-900 p-6 rounded-lg">
                    <p class="mb-4">"The service was fantastic! My home has never been cleaner."</p>
                    <h3 class="font-semibold">John Doe</h3>
                    <p class="text-sm text-gray-400">Homeowner</p>
                </div>
                <div class="bg-gray-900 p-6 rounded-lg">
                    <p class="mb-4">"Professional and reliable. Highly recommend for office maintenance."</p>
                    <h3 class="font-semibold">Jane Smith</h3>
                    <p class="text-sm text-gray-400">Office Manager</p>
                </div>
                <div class="bg-gray-900 p-6 rounded-lg">
                    <p class="mb-4">"Excellent service, very thorough and efficient."</p>
                    <h3 class="font-semibold">Robert Brown</h3>
                    <p class="text-sm text-gray-400">Business Owner</p>
                </div>
            </div>
        </div>
    </section> */}


    <OurTeam></OurTeam>

    {/* <section class="container mx-auto py-12 px-32">
        <h2 class="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-lg hover:shadow-md p-6 text-center hover:bg-slate-300">
                <img class="h-40 w-40 bg-slate-700 object-cover rounded-full mx-auto" src="team-member-1.jpg" alt="Team Member 1"/>
                <h3 class="text-xl font-semibold mt-4">Team Member 1</h3>
                <p class="mt-2 text-gray-600">Role of the team member.</p>
            </div>

            <div class="rounded-lg hover:shadow-md p-6 text-center hover:bg-slate-300">
                <img class="h-40 w-40 bg-slate-700 object-cover rounded-full mx-auto" src="team-member-1.jpg" alt="Team Member 1"/>
                <h3 class="text-xl font-semibold mt-4">Team Member 1</h3>
                <p class="mt-2 text-gray-600">Role of the team member.</p>
            </div>

            <div class="rounded-lg hover:shadow-md p-6 text-center hover:bg-slate-300">
                <img class="h-40 w-40 bg-slate-700 object-cover rounded-full mx-auto" src="team-member-1.jpg" alt="Team Member 1"/>
                <h3 class="text-xl font-semibold mt-4">Team Member 1</h3>
                <p class="mt-2 text-gray-600">Role of the team member.</p>
            </div>

            <div class="rounded-lg hover:shadow-md p-6 text-center hover:bg-slate-300">
                <img class="h-40 w-40 bg-slate-700 object-cover rounded-full mx-auto" src="team-member-1.jpg" alt="Team Member 1"/>
                <h3 class="text-xl font-semibold mt-4">Team Member 1</h3>
                <p class="mt-2 text-gray-600">Role of the team member.</p>
            </div>
            
        </div>
    </section> */}
    

    
    </>
  )
}

export default Home



/*
<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>





   <div className='bg-home-pic bg-center bg-cover h-[42.5rem] flex flex-col justify-center items-center'>
      <h1 className='text-shadow text-6xl text-white w-[55rem] text-center font-bold'>"Easy way to keep your home and office in perfect shape."</h1>
      <div className='flex gap-10 mt-6'>
      <input type="text" placeholder='🧤Search for a service' className='py-1 px-4 border border-2 rounded-md placeholder:text-black hover:border-black focus:border-blue-500 focus:outline-none'/>
      <input type="text" placeholder='📍Search by location' className='py-1 px-4 border border-2 rounded-md placeholder:text-black hover:border-black focus:border-blue-500 focus:outline-none'/>
      </div>  
    </div>

*/