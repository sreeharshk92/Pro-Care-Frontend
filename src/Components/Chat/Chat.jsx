import React, { useState, useEffect } from 'react';
import { MdOutlineAccountCircle, MdAccountCircle } from "react-icons/md";
import Pusher from 'pusher-js';
import { GoArrowLeft } from "react-icons/go";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Initialize Pusher
    const pusher = new Pusher('3ebea2ad574f59b9a060', {
      cluster: 'ap2',
    });

    // Subscribe to the 'chat' channel
    const channel = pusher.subscribe('chat');

    // Listen for 'message' event and update messages
    channel.bind('message', function (data) {
      setMessages((prevMessages) => [...prevMessages, data]); // Append new messages to the state
    });

    // Cleanup when component unmounts
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent empty messages

    // Send message to the backend
    await fetch('http://127.0.0.1:8000/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    // Clear the input field
    setMessage('');
  };

  return (
    <>
      <main className="bg-slate-200 w-full min-h-screen">
        <div className="bg-blue-900 p-3 text-white items-center relative text-2xl flex">
          <GoArrowLeft className="absolute left-3" />
          <h1 className="font-bold text-center w-full">Chat with us</h1>
        </div>

        <section className="p-3 flex justify-between font-medium">
          <div className="flex gap-1 items-center">
            <MdOutlineAccountCircle className="text-2xl" />
            <h1>John Doe</h1>
          </div>

          <div className="flex gap-1 items-center">
            <h1>Admin</h1>
            <MdAccountCircle className="text-2xl" />
          </div>
        </section>

        <div className="flex flex-col gap-3 p-3">
          {messages.map((item, index) => (
            <section key={index} className="flex justify-start">
              <div className="max-w-screen-xl flex flex-col gap-3">
                <p className="bg-gradient-to-tr from-[#7fbede] px-3 py-1 rounded-2xl rounded-tl-none">
                  {item.message}
                </p>
              </div>
            </section>
          ))}
        </div>

        <form
          onSubmit={(e) => submit(e)}
          className="fixed bottom-0 w-full flex bg-white py-2 px-3"
        >
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="bg-[#35505e] flex-grow px-3 py-1 text-white rounded-l-md focus:outline-none"
            placeholder="Type a message"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white rounded-r-md"
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
}

export default Chat;
