import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { BsChatLeft } from 'react-icons/bs';
import { IoIosArrowDown, IoMdSend } from "react-icons/io";
import { PiChats } from "react-icons/pi";




function UserChat() {

  const [isOpen, setIsOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

 

  useEffect(() => {

    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if(userInfo && userInfo.name){
      setUsername(userInfo.name);
    }
  

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

  }, [])

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
        <div onClick={toggleChatBox} className="cursor-pointer bg-gradient-to-r from-[#9cb9d5] to-[#345acf] hover:w-16 hover:h-16 w-14 h-14 rounded-full fixed bottom-10 mx-4 right-0 flex justify-center items-center transition-all duration-300 ease-in-out">

          <BsChatLeft className="text-xl text-white" />

        </div>
      )}



      {isOpen && (
        <main className="fixed  right-12 w-1/4 h-2/3 bottom-14 bg-white shadow-lg rounded-2xl ">

          <div className="flex  justify-between items-center bg-[#0566FF] rounded-2xl rounded-b-none text-white py-4 px-4">
            <h3 className="text-2xl font-medium flex justify-center items-center gap-3 py-1"><PiChats className='text-3xl' />
              Hi {username}! 👋</h3>
            <button onClick={toggleChatBox} className="text-white text-2xl hover:text-3xl  transition-all duration-300 ease-in-out"><IoIosArrowDown /></button>
          </div>

          <p className="bg-[#2a73e9] text-white py-2 px-4">Hello! How can we help you today?</p>


          <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
            
            <div className="list-group list-group-flush border-bottom scrollarea">
              {messages.map((message, index) => (

                <div key={index} className="list-group-item list-group-item-action py-3 lh-sm">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">{message.username}</strong>
                  </div>
                  <div className="col-10 mb-1 small">{message.message}</div>
                </div>

              ))}


            </div>
          </div>





          <form onSubmit={(e) => submit(e)}>
            <section className='absolute bottom-0  w-full' >
              <div className='flex justify-center px-4'>
                <hr className='w-full' />
              </div>

              <div className='flex justify-between items-center px-4 py-2'>
                <textarea name="" id="" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message...' className='w-full focus:outline-none pr-10'></textarea>
                <button type='submit' className='absolute bottom-8 right-2  text-white text-3xl rounded-full p-2 cursor-pointer bg-[#345acf] hover:text-2xl hover:bg-[#4c70db] transition-all duration-300 ease-in-out'><IoMdSend /></button>
              </div>

            </section>
          </form>




        </main>
      )}
    </div>
  );
}

export default UserChat;
