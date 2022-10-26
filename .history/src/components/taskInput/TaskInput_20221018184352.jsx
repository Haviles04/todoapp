import React from 'react'
import './taskInput.css'


function TaskInput() {
    
  return (
    <div className='inputContainer'>
        <form>
            <button id='taskBtn' className='taskBtn' type="submit" onSubmit={props.handleClick} ></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Create a new todo...' value={props.todo}></input> 
        </form>
    </div>
  )
}

export default TaskInput