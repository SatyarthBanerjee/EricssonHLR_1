import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='leftnav'>
            <h1 className='logo'>logo</h1>
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
