import React from 'react'

function Followcard(props) {

    
  return (
    <div>
        {/* <!-- heading --> */}
        <div className="bg-white rounded-lg absolute top-[200px] justify-center">        
       
        <div class="mt-[20px] ml-[20px] text-center flex flex-col">
                <span class="text-2xl font-semibold shadow-sm">{props.name}</span>
                <span class="text-md text-zinc-400">{props.ant}</span>
            </div>

        
            {/* <!-- followers --> */}
            <div class="mt-[20px] text-center flex flex-row">
                <div class="flex flex-col ml-[80px] ">
                    <span class="text-3xl text-cyan-500 font-bold">{props.followNo}</span>
                <span class="text-md text-zinc-400"> {props.followers}</span>
                </div>
                <div class="flex flex-col ml-[60px]">
                    <span class="text-3xl font-bold text-cyan-500">{props.followersNo}</span>
                <span class="text-md  text-zinc-400">{props.following}</span>
                </div>
            </div>

            {/* <!-- button --> */}
            <div class="mt-[20px] ml-[50px]">
                <button class="w-[250px] h-[40px] self-center bg-yellow-400 rounded-full">{props.follow}</button>

            </div>
            {/* <!-- para --> */}
            <div class="mt-[20px] mx-[20px] w-[320px]">
                <p  class="text-zinc-700 font-mono"> {props.para}</p>

            </div>

      </div>


    </div>
  )
}

export default Followcard