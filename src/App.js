import { getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";
import Homescreen from './screens/Homescreen';
import app from './firebase'
import Loginpage from './screens/Loginpage';
import { useEffect, useState } from 'react';
import './App.css';
import Loder from "./subcomponents/Loder";
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


async function SignOut(){
 await signOut(auth).then(()=>{console.log("errr")}).catch(()=>{console.log("error")})
}

useEffect(()=>{
  onAuthStateChanged(auth, (u) => {
    if (u) {
      setlogin(u)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
     
    } else {
      // User is signed out
      setlogin(null)
    }
  });
},[user])


const [load,setload] = useState(true)

setTimeout(function(){
 setload(false)
},5000)

if(load) return <Loder/>

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
   {user ? <Homescreen user={user} logout={SignOut}/> : <Loginpage login={signup}/>} 
 
              {/* <Classscreen/> */}
    {/* // login */}
    
    </div>
  )
}

export default App;
