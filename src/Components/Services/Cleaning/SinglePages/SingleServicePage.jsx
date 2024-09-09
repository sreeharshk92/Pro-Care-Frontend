import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import banner from './banner.png'

function SingleServicePage() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);

   // Retrieve user information from localStorage
   const userInfo = JSON.parse(localStorage.getItem('user-info'));
   const userId = userInfo ? userInfo.id : null;

  useEffect(() => {
    singleService(id);
  }, [id]);

  const singleService = async (id) => {
      let response = await fetch(`http://127.0.0.1:8000/api/singleService/${id}`);
      let result = await response.json();
      setData([result]);
  
  };
  

  const handleAddCart = async (id) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/addToCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId, // Replace this with the actual logged-in user's ID
          service_id: id,
        }),
      });
  
      const result = await response.json();
      if (response.ok) {
        navigate(`/cart`);
      } else {
        console.error('Failed to add to cart:', result.message);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  

  const handleBookNow = (id) =>{
    navigate(`/services/singleservicepage/bookingsummery/${id}`);
  }



  

  return (
    <>
      <Navbar />
      <main>
        {data.map((item) => (
          <div key={item.id}>
            <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
              <div className="absolute inset-0 bg-[#4a6ebc] opacity-70"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-4xl font-bold">{item.name}</h1>
              </div>
            </div>


            <section className="flex flex-col justify-center items-center  px-[5.7rem]">

              <div className="flex rounded-lg overflow-hidden py-5">
                <div className="w-1/2 ">
                  <img src={"http://127.0.0.1:8000/" + item.file_path} alt="Service Image" className="object-cover p-10 w-full" />
                </div>

                <div className="w-1/2 p-8">
                  <h2 className="text-2xl font-bold mb-4">{item.name}</h2>

                  <p className="text-gray-700 mb-4">{item.description}</p>

                  <p className="text-xl font-semibold text-gray-800 mb-6">₹{item.price}</p>

                <button onClick={() => handleBookNow(item.id)} className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600">Book Now</button>

                  <button onClick={()=>handleAddCart(item.id)} className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Add to Cart</button>
                </div>

                <div>

                </div>
              </div>
            </section>

            <div className='flex flex-col font-bold px-[8rem]'>
              <h1 className='text-3xl py-2 mb-3'>Customer Reviews</h1>
              <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='border shadow-lg px-5 py-4 rounded-lg'>
                  <h2 className='text-xl  flex justify-between'><i>Jhon Doe</i> <span className='text-[1rem]'>⭐⭐⭐⭐</span></h2>
                  <p className='font-normal my-2'><i>This is awsome service.Iam very happy</i></p>
                </div>
              </section>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default SingleServicePage;

