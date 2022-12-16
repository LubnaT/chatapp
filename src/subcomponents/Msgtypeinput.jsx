import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Search from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState } from 'react';

function Msgtypeinput() {
   // console.log(props.msgSetter)

   const schema = {
    uid : `arfat1234` ,
    myMessage : "",
  }
  const [text , setText] = useState(schema)

  // event is object which is passed to fntn and contains input details like name,value etc 
  // whatever input contains 
  function handleChange(event){
    // console.log(event)
  //  value is input we type as a single value of all letter 
  // setting value to event.target where target is object inside a event object
  // target contains the values of input tag
    const {value} = event.target ;
    // uid to know user log in nd sending msg is same 
    // this fntn display msg with uid
    setText({uid : `12345` , myMessage : value})

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
        value={text.myMessage}
        // whenever there is change in input or leeter typing in input it call handleChange fntn
        onChange={handleChange}
        placeholder="Type a Message"
        className='bg-slate-600 rounded-md pl-2 text-xs w-[720px] h-[25px] shadow-2xl' 
        type={Search}  />
        <KeyboardVoiceIcon/>
    </div>
  )
}

export default Msgtypeinput