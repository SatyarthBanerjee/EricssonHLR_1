import React, { useState } from 'react'
import Myform from '../Myform';
const Createbtn = () => {
    const [form, setForm]= useState(false);
    const handleClick =(e)=>{
        setForm(true)
        e.preventDefault();
    }
  return (
    <div className='createform'>
        {form===true?<Myform />:<button onClick={handleClick} className='createbtn'>Create +</button>}
      
    </div>
  )
}

export default Createbtn
