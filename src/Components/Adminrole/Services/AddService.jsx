import React from 'react'
import { useState } from 'react';
import Adminsidebar from '../Adminsidebar';
import Adminheader from '../Adminheader';


function AddService() {

  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddService = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    formData.append('description', description);
    formData.append('price', price);

    let response = await fetch('http://127.0.0.1:8000/api/addService', {
      method: 'POST',
      body: formData,
      headers: {
      }
    });

    if (response.ok) {
      alert('success');
    } else {
      alert('fail');
    }
  }

  return (
    <>
      <div className="flex">
        <Adminsidebar />
        <div className="flex-1 flex flex-col ">
          <Adminheader />
          <main className="min-h-screen items-center flex justify-center">

            <form onSubmit={handleAddService} className='border border-black rounded-md max-w-screen'>

            
              <div className='flex flex-col gap-2 w-[40rem] p-5 shadow-2xl'>

              

                  <h1 className='font-semibold text-xl'>Add Service</h1>

                  <label className='mt-2'>Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border border-black rounded-md p-2' />

                  <label className='mt-2'>Image Path</label>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])} className='border border-black rounded-md p-2' />

                  <label className='mt-2'>Description</label>
                  <textarea value={description} rows='6' onChange={(e) => setDescription(e.target.value)} className= 'border border-black rounded-md p-2' />

                  <label className='mt-2'>Price</label>
                  <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className=' border border-black rounded-md p-2' />


                  <button className='border mt-3 rounded-md p-2 bg-gray-800 text-white' type='submit'>Add</button>
                
                  </div>

            </form>


          </main>
        </div>
      </div>

    </>
  )
}

export default AddService
