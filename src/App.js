import { getAuth, GoogleAuthProvider,signOut,signInWithPopup,onAuthStateChanged, RecaptchaVerifier } from "firebase/auth";
import { getFirestore, doc, getDoc ,setDoc  } from "firebase/firestore";
import Homescreen from './screens/Homescreen';
import app from './firebase'
import Loginpage from './screens/Loginpage';
import { useEffect, useState } from 'react';
import './App.css';
import Loder from "./subcomponents/Loder";
// import Classscreen from './screens/Classscreen';

function App() {
const [user,setUser]= useState(false);



const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// auth.languageCode = 'it';
// // To apply the default browser preference instead of explicitly setting it.
// // firebase.auth().useDeviceLanguage();

// window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// }, auth);

// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
// const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);


useEffect(()=>{
  if (!user) return ;
  checkNewLogin();
},[user])

async function checkNewLogin(){
  const docRef = doc(db, "users", user?.uid);
  const docSnap = await getDoc(docRef);

if (!docSnap.exists()) {
  await setDoc(doc(db, "users", user?.uid), user);   
}
}


async function signup(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.

    const {displayName ,email ,photoURL ,uid} = result.user ;
    setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
  }).catch((error) => {
    setUser(null)
    console.log(error)
  });

}


async function SignOut(){
 await signOut(auth).then(()=>{console.log("errr")}).catch(()=>{console.log("error")})
}

useEffect(()=>{
  onAuthStateChanged(auth, (u) => {
    if (u) {
      const {displayName ,email ,photoURL ,uid} = u ;
      setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
     
    } else {
      // User is signed out
      setUser(null)
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
   {user ? <Homescreen user={user} db={db} logout={SignOut}/> : <Loginpage login={signup}/>} 
 
              {/* <Classscreen/> */}
    {/* // login */}
    
    </div>
  )
}

export default App;
