import React from 'react'
import './taskInput.css'

function TaskInput() {
  return (
    <div className='inputContainer'>
        <form>
            <input id='taskInput' className='taskInput' type="text" placeholder='Enter Task'></input>
            <button id='taskBtn' className='taskBtn' type="submit"></button>
        </form>
    </div>
  )
}

export default TaskInput