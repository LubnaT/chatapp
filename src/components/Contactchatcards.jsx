import React from 'react'

function Contactchatcards(props) {
  return (
    <div className='flex border-t border-slate-700 justify-between px-4 py-2'>
        {/* dp and msg with name */}
        <div className='flex space-x-2'>
            {/* dp */}
            <div>
                <img className='h-10 w-10 rounded-full' src={props.setImg}/>
            </div>
            {/* msg nd name */}
            <div>
                <p className='text-white text-base'>{props.setName}</p>
                <p className='text-slate-300 text-xs'>{props.setMsg}</p>
            </div>

        </div>
        {/* time */}
        <div className='flex'>
          <h1 className='text-slate-400 text-xs'>{props.setTime}</h1>
        </div>
    </div>
  )
}

export default Contactchatcards