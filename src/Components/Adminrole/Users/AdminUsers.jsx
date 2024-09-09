import React, { useEffect, useState } from 'react'
import Adminsidebar from '../Adminsidebar';
import Adminheader from '../Adminheader';
import { IoSearch } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
function AdminUsers() {

    const [data, setData] = useState([]);
    const [searchKey, setSearchKey] = useState([]);

    useEffect(() => {
        usersList();
    },[]);

    const usersList = async () => {
        let result = await fetch("http://127.0.0.1:8000/api/usersList")
        result = await result.json();
        setData(result);
    }

    const deleteUser = async (id) => {
        let result = await fetch("http://127.0.0.1:8000/api/deleteUser/" + id, {
          method: 'DELETE'
        });
        result = await result.json();
        usersList();
      };
    

    const searchUser = async (key) => {
        setSearchKey(key);
         if(key){
            let result = await fetch("http://127.0.0.1:8000/api/searchUser/" + key)
            result = await result.json();
            setData(result);
         }else{
            usersList();
         }
      
      }

    return (
        <>
            <div className="flex">
                <Adminsidebar />
                <div className="flex-1 flex flex-col">
                    <Adminheader />
                    <main className="flex-1 bg-gray-100 p-4">

                        <section className='flex justify-between'>

                       
                        <div className="text-xl font-bold mb-3">Users</div>


                        <div className='w-[20rem] mb-4 flex'>
                <input
                  type="search"
                  placeholder='Search for a user. . .'
                  onChange={(e) => searchUser(e.target.value)}
                  className='placeholder:text-[#667894] text-black font-medium bg-transparent w-full px-[1rem] py-[.7rem] border-1 border-[#686464] rounded-r-none rounded-l-md'
                />
                <div className='flex items-center justify-center rounded-r-md rounded-l-none w-[3.5rem] cursor-pointer bg-slate-800 hover:bg-slate-700'>
                  <IoSearch className=' text-white text-[1.6rem]' />
                </div>
              </div>

              </section>

                        





                        <div className="relative overflow-x-auto rounded-md">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Password
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                {data.map((item)=>
                                <tbody key={item.id}>
                                <tr className=" border-b bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4">
                                       {item.email}
                                    </td>
                                    <td className="px-6 py-4">
                                       {item.password}
                                    </td>
                                    <td className="px-6 py-4 text-xl">
                                       <MdDelete onClick={(e) => deleteUser(item.id)} className=' text-center'/>
                                    </td>
                                </tr>
                               
                            </tbody>
                                
                                
                                )}
                                
                            </table>
                        </div>


                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminUsers
