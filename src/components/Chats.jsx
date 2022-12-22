import React from 'react'
import Chatheader from '../subcomponents/Chatheader'
import Chatscroll from '../subcomponents/Chatscroll'
import Msgtypeinput from '../subcomponents/Msgtypeinput'


function Chats(props) {
  const [messageArray ,setMessageArray] = useState([]) ;
  return (
    <div className=' col-span-3 relative h-screen  '>
        {/*Header */}
        <div className='absolute z-10 top-0 bg-neutral-400 w-full'> 
        {/* getting p1 attribute value from parent homescreen to child chat through props and
        passing to p2 attribute of Chat header */}
        <Chatheader p2={props.p1}/>
        </div>
        {/* chat body */}
        {/* instead of padding cant we take margin bcz there are its taking 
        padding according to content */}
        <div className='h-screen banner overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-white scrollbar-track-blue-200 scrollbar-thin'>  
           <Chatscroll  message={messageArray}/>
        </div>
        {/* chat type */}
        <div className='absolute bottom-0 z-10 bg-orange-500 w-full'> 
        <Msgtypeinput msgSetter={setMessageArray}/>
        </div>
    </div>
  )
}

export default Chats