import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import Homescreen from './screens/Homescreen';
import app from './firebase'
import Loginpage from './screens/Loginpage';
import { useState } from 'react';
import './App.css';
// import Classscreen from './screens/Classscreen';

function App() {
const [user,setlogin]= useState(false);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


async function signup(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.

    const data = result.user;
    setlogin(data);
  }).catch((error) => {
    setlogin(null)
    console.log(error)
  });

}


console.log(user)



async function xyz(){

  
  let prom = new Promise(function (Add){
    Add(2+3)
  })

  await prom.then(function(r){
    console.log(r)
  })
}

console.log(xyz())




  return  (
    <div>
    {/* // HomeScreen */}
   {/* {user ? <Homescreen/> : <Loginpage login={setlogin}/>}  */}
   {user ? <Homescreen/> : <Loginpage login={signup}/>} 
 
              {/* <Classscreen/> */}
    {/* // login */}
    
    </div>
  )
}

export default App;
