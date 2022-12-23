import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
// import Search from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 

function Msgtypeinput({db,user ,...props}) {
   // console.log(props.msgSetter)

   const schema = {
    myMessage : "",
    uid : user?.uid ,
    img:user?.photoURL ,
    displayName : user?.displayName
  }
  const [message , setMessage] = useState(schema)

  // event is object which is passed to fntn and contains input details like name,value etc 
  // whatever input contains 
  function handleChange(event){
    // console.log(event)
  //  value is input we type as a single value of all letter 
  // setting value to event.target where target is object inside a event object
  // target contains the values of input tag
    const {name,value} = event.target ;
    // uid to know user log in nd sending msg is same 
    // this fntn display msg with uid
    setMessage(cm =>({...cm , [name] : value}))

  }


  async function postMessage(){
    if(message.myMessage === "") return ;
    // console.log(message)
    await addDoc(collection(db, "grpMSG"), message);
    setMessage(schema);
  
   }  
  
  return (
    <div className='p-2  space-x-2 bg-slate-700 '>
        <InsertEmoticonIcon/>
        <AttachFileIcon className='rotate-45'/>
        <input 
          // name should be same as myMessage key which stores messages
        name="myMessage"
        // text is setter variable which is whatever key or each letter we are typing is passed
        // is passed as seperate value to myMessage key
        value={message.myMessage}
        // whenever there is change in input or leeter typing in input it call handleChange fntn
        onChange={handleChange}
        placeholder="Type a Message"
        className='bg-slate-600 rounded-md pl-2 text-xs w-[690px] h-[25px] shadow-2xl' 
         />
         <button onClick={()=>postMessage()} className=" rounded-full"><SendIcon /></button>
         

        <KeyboardVoiceIcon/>
    </div>
  )
}

export default Msgtypeinput