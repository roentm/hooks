import React from 'react'
import TaskItem from './taskItem'

export default function AppTaskList() {
  return (
    <div className='container-fluid mt-5'>
        <div className='container'>
            <h2 className='display-5 text-center'>My Tasks:</h2>
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    </div>
  )
}
