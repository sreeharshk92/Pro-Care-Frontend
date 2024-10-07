import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState({});

  
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    switch (role) {
      case 'user': await userSubmit();
        break;

      case 'admin': await adminSubmit();
        break;

      case 'superadmin': await superAdminSubmit();
        break;

      default:setErrors({ ...errors,role:['Please select a role']});
    }
  };


  const handleErrors = (response) => {
    response.json().then((data) => {
      if (response.status === 400) {
        setErrors(data);
      }
      else if (response.status === 201) {
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

  const userSubmit = async () => {

    let item = { name, email, password };

    let response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json'
      }
    });

    handleErrors(response);
  };

  ///////////Admin///////

  const adminSubmit = async () => {

    let item = { name, email, password }
  let response = await fetch("http://127.0.0.1:8000/api/adminregister", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });

    handleErrors(response);

  }

  ///////////Super Admin////////////

  const superAdminSubmit = async () => {
    let item = { name, email, password }
    let response = await fetch("http://127.0.0.1:8000/api/superadminregister", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });
    handleErrors(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center items-center bg-slate-800 h-[49rem] antialiased'>
        <div className='bg-cyan-100 h-[38rem] w-[29rem] flex flex-col px-20 border rounded-md'>
          <h1 style={{ fontWeight:'700'}} className='text-center text-3xl mt-16'>Create New Account</h1>

          <label className='mt-4 mb-2 font-medium'>Name</label>
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className='py-1 px-2 border rounded-[5px] hover:border-black focus:outline-none' />
          {errors.name && <small className='text-red-500'>{errors.name[0]}</small>}

          <label className='mt-4 mb-2 font-medium'>Email</label>
          <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='py-1 px-2 border rounded-[5px] hover:border-black focus:outline-none' />
          {errors.email && <small className='text-red-500'>{errors.email[0]}</small>}

          <label className='mt-3 mb-2 font-medium'>Password</label>
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='py-1 px-2 border rounded-[5px] hover:border-black focus:outline-none' />
          {errors.password && <small className='text-red-500'>{errors.password[0]}</small>}

          <label className='mt-4 mb-2 font-medium'>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className='py-1 px-2 border rounded-[5px] hover:border-black focus:outline-none'>
            <option value=''>Select a role</option>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
            <option value='superadmin'>Super Admin</option>
          </select>
          { errors.role && <small className='text-red-500'>{errors.role}</small> }

          <button className='border rounded-md py-2 px-[5.6rem] mr-8 ml-8 mt-4 font-medium bg-blue-950 hover:bg-slate-800 text-white hover:transition duration-300 ease-linear' type='submit'>Register</button>
          <p className='text-center mt-5 text-[14px] text-slate-500'>Already have an account?<Link to='/Login' className='hover:underline text-blue-800 '>Log In</Link></p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
