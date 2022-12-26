import React from 'react'

function Contactchatcards({name,img,...props}) {
  return (
    <div className='hover:bg-slate-700 hover:cursor-pointer flex border-t border-slate-700 justify-between px-4 py-2'>
        {/* dp and msg with name */}
        <div className='group-hover:cursor-pointer group-hover:text flex space-x-2'>
            {/* dp */}
            <div>
                <img className='h-10 w-10 rounded-full' alt="" src={img}/>
            </div>
            {/* msg nd name */}
            <div>
                <p className='text-white text-base'>{name}</p>
                {/* <p className='text-slate-300 text-xs'>{props.msg}</p> */}
            </div>

        </div>
        {/* time */}
        {/* <div className='flex'>
          <h1 className='text-slate-400 text-xs'>{props.time}</h1>
        </div> */}
    </div>
  )
}

export default Contactchatcards