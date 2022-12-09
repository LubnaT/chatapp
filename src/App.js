import Homescreen from './screens/Homescreen';
import Loginpage from './screens/Loginpage';
import { useState } from 'react';
import './App.css';
// import Classscreen from './screens/Classscreen';

function App() {
const [user,setlogin]= useState(false);
  return  (
    <div>
    {/* // HomeScreen */}
   {user ? <Homescreen/> : <Loginpage login={setlogin}/>} 
              {/* <Classscreen/> */}
    {/* // login */}
    
    </div>
  )
}

export default App;
