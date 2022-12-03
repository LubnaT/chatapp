import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Contactlogs() {
  return (
    <div className='bg-grey-900 h-screen'>
        <div className='flex text-black justify-between items-center px-2 py-4 bg-'>
          <div> 
            <img className='h-8 w-8 rounded-full' src='https://i.pinimg.com/originals/fe/65/be/fe65bed80b33375458e7c307aa28859d.png'/>
            </div>
            <div>
                 <GroupsIcon/>
                 <ReplayIcon/>
                 <MessageIcon/>
                 <MoreVertIcon/>


            </div>
          
        </div>
        
    </div>
  )
}

export default Contactlogs