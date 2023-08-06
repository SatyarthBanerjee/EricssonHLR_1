import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  const handleHome=()=>{
    navigate("/")
  }
  return (
    <div className='nav'>
        <div className='leftnav'>
            <h1 className='logo' onClick={handleHome}>logo</h1>
        </div>
        <div className='rightnav'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Login/Register</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
