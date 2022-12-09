import React from 'react'
import Chats from '../components/Chats'
import Contactlogs from '../components/Contactlogs'
// import usestate from react whenever use it
import {useState} from 'react'

function Homescreen() {

  // using usestate hook and passing default value as null
  // setactive fntn is passed through setcontact attribute to its child attribute contactlogs
  // active variable contains the values passed from setActive fntn and then is passed to 
  // its child component chats attribute p1 
  const [active, setActive]=useState(null)


  return (
    <div className='grid grid-cols-4 h-screen max-w-[70rem] w-full mx-auto bg-slate-900 overflow-y-hidden'>

       
        {/* Contactlogs */}
              {/* passing setter function setActive to setContact attribute */}
        <Contactlogs setContact={setActive}/>
        

         {/* chats */}
         
        {active ? <Chats p1={active}/> : ""}
        {/* ternary operator : if active has information then pass it to chat component or make it null */}
        
        

    </div>
  )
}

export default Homescreen