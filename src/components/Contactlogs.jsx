import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Search from '@mui/icons-material/Search';
import Contactchatcards from './Contactchatcards';

function Contactlogs(user,logout, ...props) {

  const contactArray = [{name:"Sadia", msg:"Yes we can", time:"8:36pm",
  img:"https://pps.whatsapp.net/v/t61.24694-24/307300479_1178698296410595_3436634533088903287_n.jpg?ccb=11-4&oh=01_AdR_yctPFr67JngOYM8diZ8TxDeZpSIVYy1kFlhIPz8HYQ&oe=639A6A60"},
  {name:"Arfat", msg:"What is the point", time:"7:36pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdTmoL3T0rvGjes7tpWa614rLt-GzvT-hW_Vo73Xu7GYZA&oe=639A90F0"},
  {name:"Farah", msg:"i will respond u back", time:"9:56p",
  img:"https://pps.whatsapp.net/v/t61.24694-24/61347707_470231223728086_1061898507515854848_n.jpg?ccb=11-4&oh=01_AdQtkylG5JtKcEI4VEiBM7XTXdIxDvGMLKP8hp0t7brmaw&oe=639AA67F"},
  { name:"Sumera", msg:"I will call back", time:"8:16pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/312012244_1107282583488774_9181735343700779438_n.jpg?ccb=11-4&oh=01_AdTIiqBsnLtCnFEpLctFDwO7lvW-qvySEdRkJaH6PU7dfQ&oe=639AAF2B"},
  { name:"Arbaz", msg:"Yes u can", time:"5:22pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/290144440_1496496404106859_8161091983918440434_n.jpg?ccb=11-4&oh=01_AdTryGE2u5k1mkt4aCgi2rwonXALnjzs2Tj4WtICeY48sA&oe=639AB832"},
  { name:"Ejaz", msg:"i will get back", time:"3:30pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/298328542_766611371246745_4042993338047187675_n.jpg?ccb=11-4&oh=01_AdTlglX-0Opuw_NqqikI5wun4y3MV_5KbZt0s0tXnECbkQ&oe=639AA93D"},
  { name:"Priya", msg:"i will be late", time:"6:36pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/254356969_1358576641551011_5960011675396204557_n.jpg?ccb=11-4&oh=01_AdTNCN-diZj7BYNUk1fpaAAMIV5-tCKHGhDktVd8nk-Cxg&oe=639A95F6"},
  { name:"friendz group", msg:"how was the day?", time:"1:25pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/307300479_1178698296410595_3436634533088903287_n.jpg?ccb=11-4&oh=01_AdR_yctPFr67JngOYM8diZ8TxDeZpSIVYy1kFlhIPz8HYQ&oe=639A6A60"},
  { name:"Nikhat", msg:"whats the time for session", time:"4:36pm",
  img:"https://pps.whatsapp.net/v/t61.24694-24/311715089_113057051507378_8629449852421915821_n.jpg?ccb=11-4&oh=01_AdQxOQX1cjeiHQ2V5bWcba_imxURgKgRI-HB9P9yOssOkg&oe=639A910E"},
  { name:"Nikhat", msg:"whats the time for session", time:"4:36pm",
  img:"https://pps.whatsapp.net/v/t61.24694-24/311715089_113057051507378_8629449852421915821_n.jpg?ccb=11-4&oh=01_AdQxOQX1cjeiHQ2V5bWcba_imxURgKgRI-HB9P9yOssOkg&oe=639A910E"},
  { name:"Nikhat", msg:"whats the time for session", time:"4:36pm",
  img:"https://pps.whatsapp.net/v/t61.24694-24/311715089_113057051507378_8629449852421915821_n.jpg?ccb=11-4&oh=01_AdQxOQX1cjeiHQ2V5bWcba_imxURgKgRI-HB9P9yOssOkg&oe=639A910E"},
  { name:"Nikhat", msg:"whats the time for session", time:"4:36pm",
  img:"https://pps.whatsapp.net/v/t61.24694-24/311715089_113057051507378_8629449852421915821_n.jpg?ccb=11-4&oh=01_AdQxOQX1cjeiHQ2V5bWcba_imxURgKgRI-HB9P9yOssOkg&oe=639A910E"},
  { name:"Nikhat", msg:"whats the time for session", time:"4:36pm",
  img:"https://pps.whatsapp.net/v/t61.24694-24/311715089_113057051507378_8629449852421915821_n.jpg?ccb=11-4&oh=01_AdQxOQX1cjeiHQ2V5bWcba_imxURgKgRI-HB9P9yOssOkg&oe=639A910E"},
  { name:"friendz group", msg:"how was the day?", time:"1:25pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/307300479_1178698296410595_3436634533088903287_n.jpg?ccb=11-4&oh=01_AdR_yctPFr67JngOYM8diZ8TxDeZpSIVYy1kFlhIPz8HYQ&oe=639A6A60"},
  { name:"friendz group", msg:"how was the day?", time:"1:25pm", 
  img:"https://pps.whatsapp.net/v/t61.24694-24/307300479_1178698296410595_3436634533088903287_n.jpg?ccb=11-4&oh=01_AdR_yctPFr67JngOYM8diZ8TxDeZpSIVYy1kFlhIPz8HYQ&oe=639A6A60"}
]

//passing setContact attribute from parent component to child component through props
// this functn xyz is calling setcontact through props which has setActive fntn
function xyz(x){
    props.setContact(x);
}
  return (
    <div className='bg-grey-900 h-screen border-r-2 border-slate-600'>
      {/* 1st contact header section */}
        <div className='flex text-black justify-between items-center px-4 py-2 bg-slate-700'>
          <div> 
            <img className='h-8 w-8 rounded-full' src='https://i.pinimg.com/originals/fe/65/be/fe65bed80b33375458e7c307aa28859d.png' alt=''/>
          </div>
            <div className='space-x-2 text-slate-200'>
                 <GroupsIcon/>
                 <ReplayIcon/>
                 <MessageIcon/>
               <button onClick={()=>logout()} className=''>  <PowerSettingsNewIcon/></button>
                 <MoreVertIcon/>
            </div>
        </div>

        {/* 2nd search section */}
        <div className='flex mx-2 my-2 text-lg text-slate-300 space-x-2 justify-between items-center'>
          <div className='bg-slate-600  space-x-2 px-2 items-center rounded-lg w-full'>
            <SearchIcon fontSize='inherit'/>
            <input className='bg-transparent text-xs p-2 items-center' type={Search} name="search" placeholder="Search or Start new chat"/>
          </div>
          <div>
            <KeyboardDoubleArrowDownIcon  fontSize='inherit'/>
          </div>
        </div>

        {/* contact chat logs */}
        {/* instead of padding cant we take margin bcz there are its taking 
        padding according to content */}
        
        <div className="mt-4 max-h-[700px] pb-[280px] scrollbar-thumb-white scrollbar-track-blue-200 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll">
        {/* {
          contactArray.map((item,index)=>
          <Contactchatcards key={index} name={item.name} msg={item.msg} 
          time={item.time} img={item.img}/>)
          } */}

          {/* making contact card as button so when we click on it its person infntn shous be displayed */}
          {
             contactArray.map((item,index)=><button onClick={()=>xyz(item)} key={index} className="w-full"><Contactchatcards key={index} name={item.name} msg={item.msg} 
             time={item.time} img={item.img}/></button>)
          }

        </div>
        
    </div>
  )
}

export default Contactlogs