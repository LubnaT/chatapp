import React from 'react'

function Message(props){
return (
   <div className=''>
    {props.me ? <div className='w-full max-h-max flex justify-end'>
        <div className='max-w-max px-2 text-sm py-1 rounded-br-none rounded-lg shadow-md bg-white text-gray-800'>
        <p>{props.text}</p>
    </div>
    </div> : <div className='max-w-max px-2 py-1 text-sm shadow-md rounded-lg rounded-bl-none bg-pink-200 text-gray-800'>
    <p>{props.text}</p>
        
        </div>}
   </div>
)
}

function Chatscroll() {

  return (
    <div>
      <div className='text-white w-full h-full py-16 px-8 space-y-4 justify-end flex flex-col'>
        {/* messages sent by me nd other */}
        {/* Message component attribute text is msg and me is whether msg is sent by me or others */}
        <Message text="Hi" me={true}/>
        <Message text="How r u??" me={true}/>
        <Message text="Hello" me={false}/>
        <Message text="iam fine" me={false}/>
        <Message text="what about u?" me={false}/>
        <Message text="Good" me={true}/>
        <Message text="how is was the day?" me={true}/>
        <Message text="nice" me={false}/>
        <Message text="Hi" me={true}/>
        <Message text="How r u??" me={true}/>
        <Message text="Hello" me={false}/>
        <Message text="iam fine" me={false}/>
        <Message text="what about u?" me={false}/>
        <Message text="Good" me={true}/>
        <Message text="how is was the day?" me={true}/>
        <Message text="nice" me={false}/>
        <Message text="Hi" me={true}/>
        <Message text="How r u??" me={true}/>
        <Message text="Hello" me={false}/>
        <Message text="iam fine" me={false}/>
        <Message text="what about u?" me={false}/>
        <Message text="Good" me={true}/>
        <Message text="how is was the day?" me={true}/>
        <Message text="nice" me={false}/>
       
        {/* empty div for giving space to msg from bottom */}
        <div className='h-16'> </div>
    </div>

    </div>
    
  )
}

export default Chatscroll