import React from 'react'
import AppTaskList from './appTaskList'
import TaskInput from './taskInput'

export default function AppTasks() {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <TaskInput />
        <AppTaskList />
      </div>
    </div>
  )
}
