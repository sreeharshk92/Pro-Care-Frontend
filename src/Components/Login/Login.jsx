import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [role, setRole] = useState({});
  const navigate = useNavigate();

  let handleLogIn = async (e) => {
    e.preventDefault();

    switch (role) {
      case 'user': await userlogIn();
        break;

      case 'admin': await adminLogIn();
        break;

      case 'superadmin': await superAdminLogIn();
        break;

      default: setErrors({ ...errors, role: ['Please select a role'] });
    }
  };

  const handleErrors = (response) => {
    response.json().then((data) => {
      if (response.status === 400) {
        setErrors(data.errors);
      }
      else if(response.status === 401) {
        setErrors({backend:[data.error]});
      }
      else if (response.status === 200) {
        if (role === 'user') {
          localStorage.setItem("user-info", JSON.stringify(data));
          navigate("/Home");
        }
        else if (role === 'admin') {
          localStorage.setItem("admin-info", JSON.stringify(data));
          navigate("/Adminhome");
        }
        else if (role === 'superadmin') {
          localStorage.setItem("superadmin-info", JSON.stringify(data));
          navigate("/Superadminhome");
        }
      }
    });
  }

  const userlogIn = async () => {

    let item = { email, password }
    console.warn(item);

    let response = await fetch("http://127.0.0.1:8000/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });


    handleErrors(response);

  };



  const adminLogIn = async () => {


    let item = { email, password }

    let response = await fetch("http://127.0.0.1:8000/api/adminlogin", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });

    handleErrors(response);

  };



  const superAdminLogIn = async () => {


    let item = { email, password }

    let response = await fetch("http://127.0.0.1:8000/api/superadminlogin", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });

    handleErrors(response);

  };






  return (
    <>
      <form onSubmit={handleLogIn}>

        <div className='flex justify-center items-center bg-slate-800 h-[49rem] antialiased'>
          <div className='bg-cyan-100 h-[32rem] w-[29rem] flex flex-col px-20 border rounded-md'>

            <h1 className='text-center text-3xl font-semibold mt-16'>Log In</h1>

            <label className='mt-4 mb-2 font-medium'>Email</label>
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='py-1 px-2 border rounded-[5px] hover:border-black focus:outline-none' />
            {errors.email && <small className='text-red-500'>{errors.email[0]}</small>}

            {errors.backend && <small className='text-red-500 mt-3'>{errors.backend}</small>}

            <label className='mt-3 mb-2 font-medium'>Password</label>
            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='py-1 px-2  border rounded-[5px] hover:border-black focus:outline-none' />
            {errors.password && <small className='text-red-500'>{errors.password[0]}</small>}

            <p className='mt-1 text-center hover:underline cursor-pointer text-[14px] text-slate-500'>Forgot password?</p>

            <label className='mb-2 font-medium'>Role</label>
            <select  value={role} onChange={(e) => setRole(e.target.value)} className='py-1 px-2 border rounded-[5px] hover:border-black focus:outline-none'>
              <option value=''>Select a role</option>
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
              <option value='superadmin'>Super Admin</option>
            </select>
            {errors.role && <small className='text-red-500'>{errors.role}</small>}


            <button className='border rounded-md py-2 px-[5.6rem] mr-8 ml-8 mt-4 font-bold bg-blue-950 hover:bg-slate-800 text-white hover:transition duration-300 ease-linear' type='submit'>Log In</button>

            <p className='text-center mt-5 text-[14px] text-slate-500 '>Don't have an account?<Link to='/' className='hover:underline text-blue-800 '>Create new</Link></p>

          </div>
        </div>

      </form>
    </>
  );
}

export default Login
