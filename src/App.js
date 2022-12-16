import { getAuth, GoogleAuthProvider } from "firebase/auth";
import Homescreen from './screens/Homescreen';
import app from '../firebase'
import Loginpage from './screens/Loginpage';
import { useState } from 'react';
import './App.css';
// import Classscreen from './screens/Classscreen';

function App() {
const [user,setlogin]= useState(false);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


function signup(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.

    const data = result.user;
    setlogin(data);
  }).catch((error) => {
    console.log(error)
  });

}


console.log(user)





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
