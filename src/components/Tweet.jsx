import React from 'react'
import Followcard from '../subcomponents/Followcard' 

function Tweet(props) {

    const follow=[{name: "Morgan Sweeny",ant:"Ant Collector",  followers:"Followers", 
    followersNo:"1000", following:"Following", follow:"Follow",
    para:"Morgan has collected ants since they were six years old and now has many dozens ants but none in there pants"
    ,followNo:"12"}]
  return (
    <div>
        <div className='h-screen w-[400px] bg-rose-400 mx-auto '>
            {/* <!-- start -->/ */}
            <div className='w-[360px] h-[560px] rounded-3xl bg-white relative   ml-[20px]'>
                {/* image */}
                <div className='flex h-[150px] w-[360px] mt-[20px]'>
                 <img  className='h-[150px] w-[360px] rounded-t-3xl' src={props.showImg}/> 
                </div>

                {/* <!-- image middle --> */}
              <div className="absolute top-[100px] left-[120px]">
                <img  className="h-[120px] w-[100px] rounded-full" src={props.middleImg}/> 
                        
               </div>
             {/* <!-- menu dot --> */}
              <div class="absolute top-[160px] left-[300px]">
                <img class="h-[30px] w-[30px]" src={props.menuDot}/>            
              </div>

              {
                follow.map((item,index) =>    
               <Followcard key={index} name={item.name} ant={item.ant} followers={item.followers}
               followersNo={item.followersNo} following={item.following} followNo={item.followNo}
               follow={item.follow} para={item.para} />)
                }
            </div>
           
        </div>

        {/* <Followcard name="Morgan sweeney" ant="Ant Collector" /> */}


         
    </div>

  )
}

export default Tweet