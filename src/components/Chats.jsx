import React from 'react'
import Chatheader from '../subcomponents/Chatheader'

function Chats() {
  return (
    <div className=' col-span-3 relative bg-slate-600 h-screen  '>
        {/*Header */}
        <div className='absolute z-10 top-0 bg-neutral-400 w-full'> 
        <Chatheader/>
        </div>
        {/* chat body */}
        <div className='pt-16 pb-4 max-h-[600px] overflow-y-scroll'>  
        <p>Hello1</p>   
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello0</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello</p>  
        <p>Hello33</p>  
        </div>
        {/* chat type */}
        <div className='absolute bottom-0 z-10 bg-orange-500 w-full'>  Keyboard</div>
    </div>
  )
}

export default Chats