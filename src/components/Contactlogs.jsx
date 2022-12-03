import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Contactlogs() {
  return (
    <div className='bg-grey-900 h-screen'>
      {/* 1st contact header section */}
        <div className='flex text-black justify-between items-center px-4 py-2 bg-slate-800'>
          <div> 
            <img className='h-8 w-8 rounded-full' src='https://i.pinimg.com/originals/fe/65/be/fe65bed80b33375458e7c307aa28859d.png' alt=''/>
            </div>
            <div className='space-x-2 text-slate-200'>
                 <GroupsIcon/>
                 <ReplayIcon/>
                 <MessageIcon/>
                 <MoreVertIcon/>
            </div>
        </div>

        {/* 2nd search section */}
        <div className='bg-pink-500 justify-between'>
          <div className='bg-slate-800'>
            <SearchIcon/>
            <input type={text} name="search" value="Search or Start new chat"/>
          </div>
          <div>
            <KeyboardDoubleArrowDownIcon/>
          </div>
        </div>
        
    </div>
  )
}

export default Contactlogs