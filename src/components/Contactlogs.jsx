import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Search from '@mui/icons-material/Search';
import Contactchatcards from './Contactchatcards';

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
        <div className='mt-4'>
          <Contactchatcards setName='Sadia' setMsg='Yes we can' setTime='8:36pm' 
          setImg='https://pps.whatsapp.net/v/t61.24694-24/307300479_1178698296410595_3436634533088903287_n.jpg?ccb=11-4&oh=01_AdR_yctPFr67JngOYM8diZ8TxDeZpSIVYy1kFlhIPz8HYQ&oe=639A6A60'/>
          <Contactchatcards setName='Arfat' setMsg='What is the point' setTime='7:36pm' 
          setImg='https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdTmoL3T0rvGjes7tpWa614rLt-GzvT-hW_Vo73Xu7GYZA&oe=639A90F0'/>
           <Contactchatcards setName='Farah' setMsg='i will respond u back' setTime='9:56pm'
            setImg='https://pps.whatsapp.net/v/t61.24694-24/61347707_470231223728086_1061898507515854848_n.jpg?ccb=11-4&oh=01_AdQtkylG5JtKcEI4VEiBM7XTXdIxDvGMLKP8hp0t7brmaw&oe=639AA67F'/>
           <Contactchatcards setName='Sumera' setMsg='I will call back' setTime='8:16pm' 
           setImg='https://pps.whatsapp.net/v/t61.24694-24/312012244_1107282583488774_9181735343700779438_n.jpg?ccb=11-4&oh=01_AdTIiqBsnLtCnFEpLctFDwO7lvW-qvySEdRkJaH6PU7dfQ&oe=639AAF2B'/>
           <Contactchatcards setName='Arbaz' setMsg='Yes u can' setTime='5:22pm' 
           setImg='https://pps.whatsapp.net/v/t61.24694-24/290144440_1496496404106859_8161091983918440434_n.jpg?ccb=11-4&oh=01_AdTryGE2u5k1mkt4aCgi2rwonXALnjzs2Tj4WtICeY48sA&oe=639AB832'/>
           <Contactchatcards setName='Ejaz' setMsg='i will get back' setTime='3:30pm' 
           setImg='https://pps.whatsapp.net/v/t61.24694-24/298328542_766611371246745_4042993338047187675_n.jpg?ccb=11-4&oh=01_AdTlglX-0Opuw_NqqikI5wun4y3MV_5KbZt0s0tXnECbkQ&oe=639AA93D'/>
           <Contactchatcards setName='Priya' setMsg='i will be late' setTime='6:36pm' 
           setImg='https://pps.whatsapp.net/v/t61.24694-24/254356969_1358576641551011_5960011675396204557_n.jpg?ccb=11-4&oh=01_AdTNCN-diZj7BYNUk1fpaAAMIV5-tCKHGhDktVd8nk-Cxg&oe=639A95F6'/>
           <Contactchatcards setName='friendz group' setMsg='how was the day?' setTime='1:25pm' 
           setImg='https://pps.whatsapp.net/v/t61.24694-24/307300479_1178698296410595_3436634533088903287_n.jpg?ccb=11-4&oh=01_AdR_yctPFr67JngOYM8diZ8TxDeZpSIVYy1kFlhIPz8HYQ&oe=639A6A60'/>
           <Contactchatcards setName='Nikhat' setMsg='whats the time for session' setTime='4:36pm' 
           setImg='https://pps.whatsapp.net/v/t61.24694-24/311715089_113057051507378_8629449852421915821_n.jpg?ccb=11-4&oh=01_AdQxOQX1cjeiHQ2V5bWcba_imxURgKgRI-HB9P9yOssOkg&oe=639A910E'/>
        </div>
        
    </div>
  )
}

export default Contactlogs