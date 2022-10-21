import React from 'react'
import AppTaskList from './appTaskList'
import TaskInput from './taskInput'

export default function AppTasks() {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <h1 className='display-4 text-center'>Tasks List:</h1>
        <div className='col-lg-6 p-3 mx-auto'>
          <TaskInput />
          <AppTaskList />
        </div>
      </div>
    </div>
  )
}
