import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from "firebase/firestore";


function Message({data ,me}){
return (
   <div className=''>
    {me ? <div className='w-full max-h-max flex justify-end'>
        <div className='max-w-max px-2 text-sm py-1 rounded-br-none rounded-lg shadow-md bg-white text-gray-800'>
        <p>{data.myMessage}</p>
    </div>
    </div> : <div className='max-w-max px-2 py-1 text-sm shadow-md rounded-lg rounded-bl-none bg-pink-200 text-gray-800'>
         <p className=' text-xs text-teal-700'>{data.displayName}</p>
        <p>{data.myMessage}</p>
        
        </div>}
   </div>
)
}

function Chatscroll({user,db,...props}) {
  const[messages,setMessages] = useState([]);

  useEffect(()=>{
    onSnapshot(collection(db, "grpMSG"), (querySnapshot) => {
    const tempMessageArr = [];
    querySnapshot.forEach((doc) => {
        tempMessageArr.push(doc.data());
    });
    setMessages(tempMessageArr);

    });
},[db])


console.log(messages)

  return (
    <div  className=' flex flex-col h-full '>
      <div className='text-white w-full  py-16 px-8 justify-end  flex flex-col'>
        <div className=' h-[45rem] xl:h-[50rem] space-y-3'>
           {/* messages sent by me nd other */}
        {/* Message component attribute text is msg and me is whether msg is sent by me or others */}
        {/* <Message text="Hi" me={true}/> */}
        {messages.map((message ,index) => <Message me={message.uid === user.uid} data={message} key={index}  />)}
       
        {/* empty div for giving space to msg from bottom */}
        <div className='h-16'> </div>

        </div>
       
    </div>

    </div>
    
  )
}

export default Chatscroll