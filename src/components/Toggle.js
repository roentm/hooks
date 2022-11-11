import React, { useState } from 'react'
import './toggle.css'

export default function Toggle() {
    const [toggle,setToggle]= useState(false);

    const updateToggle=()=>{
        setToggle(!toggle);
    }


  return (
    <div className='container'>
        <div className='d-flex justify-content-center mt-3'>
            <button onClick={updateToggle} className='toggleShow'>Show/Hide</button>
        </div>
        {
         toggle && <div className='showDiv'></div>
        }
    </div>
  )
}
