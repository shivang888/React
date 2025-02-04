import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Rooms from './Components/Rooms'
import Gallery from './Components/Gallery'
import ContactUs from './Components/ContactUs'



function App() {
      

  return (
    <>
    {/* Navbar Contain started */}
    <nav class="navbar">
    <div class="logo">
      <a href="#"><img src="https://shivdhararesorts.com/images/logo.png" alt="" /></a>
    </div>
    <input type="checkbox" id="toggle-menu" class="toggle-menu"/>
    <label for="toggle-menu" class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul class="nav-links">
      <Link to={'/'}><li>Home</li></Link>
      <Link to={'/Rooms'}><li>Rooms</li></Link>
      <Link to={'Gallery'}><li>Gallery</li></Link>
      <Link to={'/ContactUs'}><li>ContactUs</li></Link>
    </ul>
  </nav> 

  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Rooms' element={<Rooms/>}></Route>
    <Route path='/Gallery' element={<Gallery/>}></Route>
    <Route path='/ContactUs' element={<ContactUs/>}></Route>
  </Routes>

          
  
    </>
  )
}

export default App
