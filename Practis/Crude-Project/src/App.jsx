import { signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from '../config/firebase';


const App = () => {
  const [userData,setUserData] = useState();

  function handleAuth() {
    signInWithPopup(auth,provider).then((res) => {
      console.log(res);
    })
  }
  return (
    <div>
      <button>Google Login</button>
    </div>
  )
}

export default App
