import React, { useRef } from 'react'

export default function InputDate(props) {
    const inputRef=useRef();

    const changeDate=()=>{
        props.changeDate(inputRef.current.value)
    }


  return (
    <div className='col-lg-4 d-flex mx-auto my-2'>
        <input className='input form-control' ref={inputRef} type="date" />
        <button className='btn btn-info mx-2' onClick={changeDate}>Change</button>
    </div>
  )
}
