import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { BsChatLeft } from 'react-icons/bs';
import { IoIosArrowDown, IoMdSend } from "react-icons/io";
import { PiChatsFill } from "react-icons/pi";


function AdminChat() {
    const [isOpen, setIsOpen] = useState(false);

    const [username, setUsername] = useState('Admin');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      Pusher.logToConsole = true;
  
      const pusher = new Pusher('642afa342eb99f9dbc73', {
        cluster: 'ap2'
      });
  
      const channel = pusher.subscribe('chat');
      channel.bind('message', function (data) {
        setMessages((prevMessages) => [...prevMessages, data]);
      });
  
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      };
    }, []);
  
    const submit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://127.0.0.1:8000/api/messages", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            username,
            message
          })
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        setMessage('');
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const toggleChatBox = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        {isOpen ? null : (
          <div onClick={toggleChatBox} className="cursor-pointer bg-gradient-to-r from-[#f9a825] to-[#f57c00] hover:w-16 hover:h-16 w-14 h-14 rounded-full fixed bottom-10 mx-4 right-0 flex justify-center items-center transition-all duration-300 ease-in-out">
            <BsChatLeft className="text-xl text-white" />
          </div>
        )}
  
        {isOpen && (
          <main className="fixed right-12 w-1/4 h-2/3 bottom-14 bg-slate-200  text-white shadow-lg rounded-2xl">
            <div className="flex justify-between items-center bg-slate-800 rounded-2xl rounded-b-none text-white py-4 px-4">
              <h3 className="text-2xl font-medium flex justify-center items-center gap-3 py-1">
                <PiChatsFill className='text-3xl' /> Admin Panel Chat
              </h3>
              <button onClick={toggleChatBox} className="text-white text-2xl hover:text-3xl transition-all duration-300 ease-in-out">
                <IoIosArrowDown />
              </button>
            </div>
  
            <p className="bg-slate-700 text-white py-2 px-4">Manage customer inquiries here.</p>
  
            <div className="list-group list-group-flush border-bottom scrollarea">
              {messages.map((message, index) => (
                <div key={index} className="list-group-item list-group-item-action py-3 lh-sm  bg-slate-300">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">{message.username}</strong>
                  </div>
                  <div className="col-10 mb-1 small">{message.message}</div>
                </div>
              ))}
            </div>
  
            <form onSubmit={(e) => submit(e)}>
              <section className='absolute bottom-0 w-full'>
                <div className='flex justify-center px-4'>
                  <hr className='w-full text-black' />
                </div>
                <div className='flex justify-between items-center px-4 py-2'>
                  <textarea name="" id="" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message...' className='w-full focus:outline-none pr-10 bg-slate-200 text-black'></textarea>
                  <button type='submit' className='absolute bottom-8 right-2  text-white text-3xl rounded-full p-2 cursor-pointer bg-slate-800 hover:text-2xl hover:bg-slate-700 transition-all duration-300 ease-in-out'>
                    <IoMdSend />
                  </button>
                </div>
              </section>
            </form>
          </main>
        )}
      </div>
    );
  }
  
  export default AdminChat;
 
