import React from 'react'
import Chatheader from '../subcomponents/Chatheader'
import Keyboard from '../subcomponents/Keyboard'

function Chats() {
  return (
    <div className=' col-span-3 relative h-screen  '>
        {/*Header */}
        <div className='absolute z-10 top-0 bg-neutral-400 w-full'> 
        <Chatheader/>
        </div>
        {/* chat body */}
        {/* instead of padding cant we take margin bcz there are its taking 
        padding according to content */}
        <div className='text-white pt-16 pb-20 max-h-[600px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-white scrollbar-track-blue-200 scrollbar-thin overflow-y-scroll'>  
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
        <div className='absolute bottom-0 z-10 bg-orange-500 w-full'> 
        <Keyboard/>
        </div>
    </div>
  )
}

export default Chats