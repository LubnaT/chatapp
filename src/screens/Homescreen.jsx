import React from 'react'
import Chats from '../components/Chats'
import Contactlogs from '../components/Contactlogs'

function Homescreen() {
  return (
    <div className='grid grid-cols-4 h-screen max-w-[70rem] w-full mx-auto bg-slate-900 overflow-y-hidden'>

       const [active, setActive]=useState(null)
        {/* Contactlogs */}
    
        <Contactlogs setContact={setActive}/>
        

         {/* chats */}
         
        {/* <Chats/> */}
        {active ? <Chats p1={active} />  : ""}
        

    </div>
  )
}

export default Homescreen