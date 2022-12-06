import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chatheader() {
  return (
    <div className='flex justify-between items-center px-4 py-2  h-[50px] bg-slate-700'>
          <div className='flex space-x-2 items-center'> 
            <img className='h-8 w-8 rounded-full' src='https://i.pinimg.com/originals/fe/65/be/fe65bed80b33375458e7c307aa28859d.png' alt=''/>
            <div>
            <p className=' text-slate-200 text-lg font-semibold'>Sadia</p>
            <p className=' text-slate-200 text-xs'>last time seen 2 min ago</p>

            </div>
            
            </div>
            <div className='space-x-2 text-slate-200'>
            <SearchIcon/>
                 <MoreVertIcon/>
            </div>
        </div>
  )
}

export default Chatheader