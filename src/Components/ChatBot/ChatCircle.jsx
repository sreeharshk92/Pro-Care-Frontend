import React, { useState } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { IoIosArrowDown } from "react-icons/io";


function ChatCircle() {
  // State to toggle the chatbox visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the chatbox
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
        <main className="fixed  right-12 w-80 h-2/3 bottom-14 bg-white shadow-lg rounded-lg ">
          
          <div className="flex justify-between items-center bg-[#0566FF] rounded-lg rounded-b-none text-white p-4">
            <h3 className="text-lg font-semibold">Hi Sreeharsh! 👋</h3>
            <button onClick={toggleChatBox} className="text-white text-2xl hover:text-3xl  transition-all duration-300 ease-in-out"><IoIosArrowDown className='' /></button>
          </div>
          
            <p className="bg-blue-200 p-4">Hello! How can we help you today?</p>

          
        </main>
      )}
    </div>
  );
}

export default ChatCircle;
