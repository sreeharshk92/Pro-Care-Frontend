import React from 'react'
import { RiCloseFill } from "react-icons/ri";

function Notifications({ close }) {
  return (
    <>
      <div className='flex justify-between p-3'>
      <h3 className='text-2xl font-bold'>Notifications</h3>

  
      <RiCloseFill className='text-3xl' onClick={close}/>
      
      



     
      </div>
      <hr className='mx-3'/>
      
    
    </>
  )
}

export default Notifications
