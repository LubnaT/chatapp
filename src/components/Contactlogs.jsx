import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Search from '@mui/icons-material/Search';
import Contactchatlogs from './Contactchatlogs';

function Contactlogs() {
  return (
    <div className='bg-grey-900 h-screen'>
      {/* 1st contact header section */}
        <div className='flex text-black justify-between items-center px-4 py-2 bg-slate-700'>
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
        <div className='flex mx-2 my-2 text-lg text-slate-300 space-x-2 justify-between items-center'>
          <div className='bg-slate-600  space-x-2 px-2 items-center rounded-lg w-full'>
            <SearchIcon fontSize='inherit'/>
            <input className='bg-transparent text-xs' type={Search} name="search" placeholder="Search or Start new chat"/>
          </div>
          <div>
            <KeyboardDoubleArrowDownIcon  fontSize='inherit'/>
          </div>
        </div>

        {/* contact chat logs */}
        <div>
          <Contactchatlogs/>
        </div>
        
    </div>
  )
}

export default Contactlogs