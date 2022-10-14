import React from 'react'

export default function ShowDate(props) {
  return (
    <div className='col-lg-6 text-center mx-auto'>
        <h2>
            Countdown to {props.deadline}
        </h2>
        <h3>
            Days Left: ---
        </h3>
    </div>
  )
}
