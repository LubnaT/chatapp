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
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const data = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

}








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
