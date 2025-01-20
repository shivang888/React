import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [Counter,setCount] = useState(0);

 const IncValue = () => {
    setCount(Counter + 1);
 }

 const DecValue = () => {
  if(Counter > 0){
    setCount(Counter - 1);
  }
 }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{Counter}</h2>
      <button onClick={IncValue}  id='inc'>Increment</button>
      <button onClick={DecValue} disabled = {Counter === 0} id='dec'>Decrement</button>
    </>
  )
}

export default App
