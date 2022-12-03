import React from 'react'

function Chats() {
  return (
    <div className=' col-span-3 relative bg-slate-600 h-screen '>
        {/*Header */}
        <div className='sticky top-0 bg-neutral-400 w-full'> Chat Head </div>
        {/* chat body */}
        <div className='bg-red-500'>  Body   </div>
        {/* chat type */}
        <div className='absolute bottom-0 bg-orange-500 w-full'>  Keyboard</div>
    </div>
  )
}

export default Chats