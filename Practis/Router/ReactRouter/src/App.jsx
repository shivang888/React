import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  

  return (
    <>
      <nav className="navbar">
      <div className="logo">Shivang Rayka</div>
      <ul className="nav-links">
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/About"}><li>About</li></Link>
        <Link to={"/Contact"}><li>Contact</li></Link>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Shivang Rayka</h2>
          <p>Bringing the best of the web to you.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MyApp. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default App
