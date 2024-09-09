import React, { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";


function AddressPage() {

  
   const userInfo = JSON.parse(localStorage.getItem('user-info'));
   const userId = userInfo ? userInfo.id : null;

  const [formData,setFormData] = useState({
    user_id:'',
    order_id:'',
    first_name: '',
    phone_number: '',
    email_address:'',
    street_address:'',
    city:'',
    state:'',
    country:'',
    zip_code:'',
  });

  useEffect(() => {
    if (userId) {
      setFormData(prevFormData => ({
        ...prevFormData,
        user_id: userId,
      }));

      // Fetch the latest order_id for the user
      fetch(`http://127.0.0.1:8000/api/getLatestOrderId`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.order_id) {
          setFormData(prevFormData => ({
            ...prevFormData,
            order_id: data.order_id
          }));
        } else {
          console.error('No order found');
        }
      })
      .catch(error => console.error('Error fetching order_id:', error));
    }
  }, [userId]);



  const handleAddressChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const navigate = useNavigate();

  const handleSaveAddress = async(e)=> {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/storeAddress",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify(formData)
    });

    const result = await response.json();

    if(response.ok){
      setIsAddressSaved(true)
      alert('Address saved');
    }else{
      alert('Failed to save')
    } 
  
  }

  const handleConfirmBooking =()=>{
    if (isAddressSaved) {
      navigate('/orders');
    } else {
      alert('Please save the address before confirming the booking.');
    }
  }


  


  return (

    <>
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md bo">
      <h2 className="text-2xl font-bold mb-4">Delivery Address</h2>
      <p className="mb-6">Please provide your delivery details</p>
      <form onSubmit={handleSaveAddress}>
        <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleAddressChange}   className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleAddressChange}  className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
          <input type="text" name="email_address" value={formData.email_address} onChange={handleAddressChange}  className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Street Address</label>
          <input type="text" name="street_address" value={formData.street_address} onChange={handleAddressChange} className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">City</label>
          <input type="text" name="city" value={formData.city} onChange={handleAddressChange}  className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">State</label>
          <input type="text" name="state" value={formData.state} onChange={handleAddressChange} className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleAddressChange} className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Zip code</label>
          <input type="text" name="zip_code" value={formData.zip_code} onChange={handleAddressChange} className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white font-thin px-2 rounded-md hover:bg-blue-600">Save Address</button>
            <Link to='/singleservicepage'><button className="bg-slate-500 text-white px-6 py-2 font-thin rounded-md hover:bg-slate-600">Cancel</button></Link>
          </div>


        </form>
        <button onClick={handleConfirmBooking} className="bg-blue-800 text-white my-3 px-6 py-2 rounded-md hover:bg-blue-600">Confirm Booking</button>

        </div>
    </>
  )
}

export default AddressPage
