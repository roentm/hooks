import React, { useRef } from 'react'

export default function TaskInput() {
  const taskRef=useRef();
  const timeRef=useRef();
  return (
    <div className='container-fluid'>
      <div className='container'>
        <h3>Task Name:</h3>
        <input ref={taskRef} type="text" className='form-control'/>
        <h3>Task Deadline:</h3>
        <input ref={timeRef} type="time" className='form-control'/>
        <div className='mt-3 text-center'>
          <button className='btn btn-success mx-1'>Add</button>
          <button className='btn btn-danger mx-1'>Reset</button>
        </div>
      </div>
    </div>
  )
}
