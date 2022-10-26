import React from 'react'
import './taskInput.css'
import {handleClick} from './app.js'

function TaskInput() {
    
  return (
    <div className='inputContainer'>
        <form>
            <button id='taskBtn' className='taskBtn' type="submit" onSubmit={handleClick}></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Create a new todo...' value={todo}></input> 
        </form>
    </div>
  )
}

export default TaskInput