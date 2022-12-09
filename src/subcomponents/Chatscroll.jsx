import React from 'react'

function Chatscroll() {
  return (
    <div className='text-white w-full h-full py-16 px-8 grid grid-cols-1'>
        {/* messages sent by me nd other */}
        <Message text="" me={}/>
        <Message text="" me={}/>
        <Message text="" me={}/>
        <Message text="" me={}/>
        <Message text="" me={}/>
        <Message text="" me={}/>
        <Message text="" me={}/>
        <Message text="" me={}/>
       
        {/* empty div for giving space to msg from bottom */}
        <div className='h-16'> </div>
    </div>
  )
}

export default Chatscroll