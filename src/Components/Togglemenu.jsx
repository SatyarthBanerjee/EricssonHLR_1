import React from 'react'
import { useNavigate } from 'react-router-dom'

const Togglemenu = ({onClose, tog}) => {
    const closetoggle = ()=>{
        onClose(false)
    }
    const navigate = useNavigate()
    const gotomain =()=>{
        navigate("/")
    }
    const gotoShow =()=>{
      navigate("/submittedform")
    }
    const gotoHome =()=>{
      navigate('/Home')
    }
  return (
    <div className="togglemenu">
            <img className="closetoggle" onClick={closetoggle} src='/Images/close (1).png'></img>
            <p><a onClick={gotoHome}>Home</a></p>
            <p><a onClick={gotoShow}>Show data</a></p>
            <p><a href='#'>Contact Us</a></p>
            <p><a onClick={gotomain}>LogOut</a></p>
      
    </div>
  )
}

export default Togglemenu
