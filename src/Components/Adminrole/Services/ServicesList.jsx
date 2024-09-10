import React, { useEffect, useState } from 'react';
import Adminsidebar from '../Adminsidebar';
import Adminheader from '../Adminheader';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiSave3Fill } from "react-icons/ri";

function ServicesList() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState([]);

  const [editing, setEditing] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  };

  const deleteOperation = async (id) => {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    getList();
  };

  const startEditing = (item) => {
    setEditing(item.id);
    setUpdatedDescription(item.description);
    setUpdatedName(item.name);
    setUpdatedPrice(item.price);
  };

  const handleDescriptionChange = (e) => {
    setUpdatedDescription(e.target.value);
  };

  const handleNameChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setUpdatedPrice(e.target.value);
  };

  const saveDescription = async (id) => {
    let result = await fetch("http://127.0.0.1:8000/api/update/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: updatedDescription,
        name: updatedName,
        price: updatedPrice,
      }),
    });
    result = await result.json();
    setEditing(null);
    getList();
  };


  const searchService = async (key) => {
    setSearchKey(key)
    if (key) {
      let result = await fetch("http://127.0.0.1:8000/api/searchService/" + key)
      result = await result.json();
      setData(result);
    } else {
      getList();
    }

  }

  return (
    <>
      <div className="flex">
        <Adminsidebar />
        <div className="flex-1 flex flex-col">
          <Adminheader />
          <main className="flex-1 p-4 bg-slate-100">
            <div className='flex justify-between mb-2'>
              <h1 className="text-xl font-bold mb-3">Services</h1>
              <div className='w-[20rem] mb-4 flex'>
                <input
                  type="search"
                  placeholder='Search for a service. . .'
                  onChange={(e) => searchService(e.target.value)}
                  className='placeholder:text-[#667894] text-black font-medium bg-transparent w-full px-[1rem] py-[.7rem] border-1 border-[#686464] rounded-r-none rounded-l-md'
                />
                <div className='flex items-center justify-center rounded-r-md rounded-l-none w-[3.5rem] cursor-pointer bg-slate-800 hover:bg-slate-700'>
                  <IoSearch className=' text-white text-[1.6rem]' />
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {data.map((item) => (
                <div key={item.id} className=" bg-white rounded-md shadow-2xl  p-5   hover:shadow-black transition duration-700 ease-out">

                  <section className='flex justify-between'>



                    <div className='max-w-screen-sm flex flex-col gap-3'>

                      {editing === item.id ? (
                        <input
                          type="text"
                          value={updatedName}
                          onChange={handleNameChange}
                          className="w-full font-bold text-[1.4rem] mb-2"
                        />
                      ) : (
                        <h2 className="font-bold text-[1.4rem]">{item.name}</h2>
                      )}

                      {editing === item.id ? (
                        <textarea
                          value={updatedDescription}
                          onChange={handleDescriptionChange}
                          className="w-full"
                        />
                      ) : (
                        <p className="">{item.description}</p>
                      )}

                      {editing === item.id ? (
                        <input
                          type="text"
                          value={updatedPrice}
                          onChange={handlePriceChange}
                          className="w-full font-semibold text-[1.5rem] mb-2"
                        />
                      ) : (
                        <p className="font-bold text-[1.3rem]">₹{item.price}.00</p>
                      )}

                      <div className='flex gap-2 max-w-screen-sm mt-2b'>
                        <MdDelete onClick={() => deleteOperation(item.id)} className='text-[1.5rem] cursor-pointer text-red-600' />
                        {editing === item.id ? (
                          <>
                            <RiSave3Fill onClick={() => saveDescription(item.id)} className='text-[1.5rem] cursor-pointer text-green-600' />
                            <button onClick={() => setEditing(null)} className='text-[.8rem] bg-black text-white rounded-md px-2'>
                              Cancel
                            </button>
                          </>
                        ) : (
                          <FaEdit onClick={() => startEditing(item)} className='text-[1.5rem] cursor-pointer' />
                        )}
                      </div>
                    </div>


                    <div>
                      <img src={"http://127.0.0.1:8000/" + item.file_path} alt="img" className='w-[20rem] h-auto rounded-md mb-4' />
                    </div>




                  </section>



                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ServicesList;
