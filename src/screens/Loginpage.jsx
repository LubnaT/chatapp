import React from 'react'

function Loginpage(props) {
  return (
    <div>
         <div id="login-area" class="mt-10">
        <h1 class="text-center font-bold text-5xl italic">Whatsapp Login</h1>
        <div id="login" class="bg-[#EAEDED] rounded-lg p-10 shadow-2xl w-[1000px] h-[300px] mt-[100px] ml-[200px]">
            <h3 class="text-2xl drop-shadow-xl font-semibold ml-[40px]">Login</h3>
            <input id="email" type="text" class="mt-[10px] pointer-events-auto cursor-text border-solid border-2 border-zinc-600 h-10 w-[500px] ml-[20px]" placeholder="Email"/>
            <br/>
            <input id="password" type="text" class="mt-[10px] cursor-text h-10 w-[500px] ml-[20px] border-solid border-2 border-zinc-600" placeholder="Password"/>
            <br/>
            <button id="submit-btn" onClick="valid()" class=" hover:bg-red-400 rounded-md text-center mt-[30px] ml-[20px] border-solid border-2 border-black text-lg shadow-2xl bg-indigo-700 p-2 h-12 w-36">Submit</button>
            <button id="submit-btn" onClick={props.login} class=" rounded-md text-center mt-[40px] ml-[20px] border-solid border-2 border-black text-lg shadow-2xl bg-white p-2 h-12 w-36">Google</button>
        </div>
    </div>

    </div>
  )
}

export default Loginpage