import React from 'react'
import Chats from '../components/Chats'
import Contactlogs from '../components/Contactlogs'
// import usestate from react whenever use it
import {useState} from 'react'


function Homescreen({user,db,logout}) {

  // console.log(logout)

  // using usestate hook and passing default value as null
  // setactive fntn is passed through setcontact attribute to its child attribute contactlogs
  // active variable contains the values passed from setActive fntn and then is passed to 
  // its child component chats attribute p1 
  const [active, setActive]=useState(null)


  return (
    <div className='grid grid-cols-4 h-screen max-w-[70rem] w-full mx-auto bg-slate-900 overflow-y-hidden'>

       
        {/* Contactlogs */}
              {/* passing setter function setActive to setContact attribute */}
        <Contactlogs user={user} db={db} logout={logout} setContact={setActive}/>
        
        

         {/* chats */}
         
        {active ? <Chats user={user} db={db} p1={active}/> : 
        <div className=' flex justify-center items-center col-span-3 w-full'>   
        <p className=' font-black text-7xl text-gray-400'>welcome</p>
        </div>}
        {/* ternary operator : if active has information then pass it to chat component or make it null */}
        
        

    </div>
  )
}

export default Homescreen