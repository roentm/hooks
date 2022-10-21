import React from 'react'
import TaskItem from './taskItem'

export default function AppTaskList() {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    </div>
  )
}
