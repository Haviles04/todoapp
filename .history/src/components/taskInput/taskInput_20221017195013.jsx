import React from 'react'
import './taskInput.css'

function TaskInput() {
  return (
    <div className='inputContainer'>
        <form>
            <button id='taskBtn' className='taskBtn' type="submit"></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Enter Task'></input>
            
        </form>
    </div>
  )
}

export default TaskInput