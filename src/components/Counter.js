import {useState} from 'react'
import React from 'react'
import '../counter.css'

export default function Counter() {
    const [counter,setCounter]= useState(1);
  return (
    <React.Fragment>
        <div className='text-center'>
            <h1>{counter}</h1>
        </div>
        <div className='wrapperCounter'>
            <button className='me-3 btn btn-info' onClick={()=>{setCounter(counter+1)}}>+</button>
            <button className='btn btn-danger' onClick={()=>{setCounter(counter-1)}}>-</button>
        </div>
        
    </React.Fragment>
    

  )
}
