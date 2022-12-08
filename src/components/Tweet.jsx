import React from 'react'

function Tweet(props) {
  return (
    <div>
         <div class="grid grid-col-1 h-screen w-[400px] bg-rose-400 ml-[500px] mt-[30px] ">
        {/* <!-- start -->/ */}
        <div class="w-[360px] h-[530px] rounded-3xl bg-white relative top-0 mt-[20px] ml-[20px]">
            {/* <!-- iamge --> */}
            <div class="flex h-[150px] w-[360px] ">
                <img  class="h-[150px] w-[360px] rounded-t-3xl" src={props.showImg}/> 
            </div>
            {/* <!-- image middle --> */}
            <div class="absolute top-[100px] left-[120px]">
                <img  class="h-[90px] w-[100px] rounded-full" src={props.middleImg}/> 
                        
            </div>
            {/* <!-- menu dot --> */}
            <div class="absolute top-[160px] left-[300px]">
                <img class="h-[30px] w-[30px]" src={props.menuDot}/>            
            </div>
{/* <!-- heading --> */}
            <div class="mt-[60px] text-center flex flex-col">
                <span class="text-2xl font-semibold shadow-sm">{props.name}</span>
                <span class="text-md text-zinc-400">{props.ant}</span>
            </div>

            {/* <!-- followers --> */}
            <div class="mt-[20px] text-center flex flex-row">
                <div class="flex flex-col ml-[80px] ">
                    <span class="text-3xl text-cyan-500 font-bold">{props.follNo}</span>
                <span class="text-md text-zinc-400"> {props.follow}</span>
                </div>
                <div class="flex flex-col ml-[60px]">
                    <span class="text-3xl font-bold text-cyan-500">{props.followNo}</span>
                <span class="text-md  text-zinc-400">{props.following}</span>
                </div>
            </div>

            {/* <!-- button --> */}
            <div class="mt-[20px] ml-[50px]">
                <button class="w-[250px] h-[40px] self-center bg-yellow-400 rounded-full">{props.fo}</button>

            </div>
            {/* <!-- para --> */}
            <div class="mt-[20px] mx-[40px] w-[300px]">
                <p  class="text-zinc-700 font-mono"> {props.para}</p>

            </div>
    

        </div>
    </div>
    </div>
  )
}

export default Tweet