import React, { useEffect, useState } from 'react'

export default function ShowDate(props) {

  const [days,setDays]=useState(999);

  useEffect(()=>{
    const time= Date.parse(props.deadline) - Date.now();
    const newDays=Math.floor(time / (1000*60*60*24));
    setDays(newDays);
  },[props.deadline])

  return (
    <div className='col-lg-6 text-center mx-auto'>
        <h2>
            Countdown to {props.deadline}
        </h2>
        <h3>
            Days Left: {days}
        </h3>
    </div>
  )
}
