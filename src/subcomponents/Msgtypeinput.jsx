import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Search from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

function Msgtypeinput() {
  return (
    <div className='p-2  space-x-2 bg-slate-700 '>
        <InsertEmoticonIcon/>
        <AttachFileIcon className='rotate-45'/>
        <input className='bg-slate-600 rounded-md pl-2 text-xs w-[720px] h-[25px] shadow-2xl' type={Search} name="search" placeholder="Type a message"/>
        <KeyboardVoiceIcon/>
    </div>
  )
}

export default Msgtypeinput