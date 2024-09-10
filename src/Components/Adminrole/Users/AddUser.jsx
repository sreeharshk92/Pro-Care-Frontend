import React, { useState } from 'react'
import Adminheader from '../Adminheader'
import Adminsidebar from '../Adminsidebar'

function AddUser() {

const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

    const handleAddUser = async (e) => {
        e.preventDefault();

        let item = { name ,email ,password }

        let response = await fetch("http://127.0.0.1:8000/api/register",{
            method:'post',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
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
                    <main className='bg-slate-100 h-full flex  justify-center items-center'>
                        <form onSubmit={handleAddUser} className='inline-flex flex-col border-2 border-black rounded-md p-5 w-1/2 ' >

                            <h1 className='font-bold text-xl'>Add User</h1>

                            <label className='mt-2'>Name</label>
                            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className='border border-black rounded-md p-2' />

                            <label className='mt-2'>Email</label>
                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black rounded-md p-2' />

                            <label className='mt-2'>Password</label>
                            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-black rounded-md p-2' />

            <button className='border mt-3 rounded-md p-2 bg-gray-800 hover:bg-gray-700 text-white' type='submit'>Add</button>

                        </form>

                    </main>
                </div>
            </div>
        </>
    )
}

export default AddUser
