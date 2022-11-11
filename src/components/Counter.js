import {useEffect, useState} from 'react'
import React from 'react'
import '../counter.css'

export default function Counter() {
    const [counter,setCounter]= useState(1);
    useEffect(()=>{
        console.log('react works');
    },[])
  return (
    <React.Fragment>
        <div className='text-center'>
            <h1>{counter}</h1>
        </div>
        <div className='wrapperCounter'>
            <button className='me-3 btn btn-info' onClick={()=>{if (counter<20) setCounter(counter+1)}}>+</button>
            <button className='btn btn-danger' onClick={()=>{if (counter>0) setCounter(counter-1)}}>-</button>
        </div>
        
    </React.Fragment>
    

  )
}
