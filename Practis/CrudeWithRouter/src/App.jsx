import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import Read from './Components/Read'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Create/>}/>
        <Route path='/' element={<Update/>}/>
        <Route path='/' element={<Read/>}/>
      </Routes>
    </>
  )
}

export default App
