import React from 'react'
import './taskForm.css'


function TaskForm(props) {
    
  return (
    <div className='inputContainer'>
        <form onSubmit={props.handleClick}>
            <button id='taskBtn' className='circleBtn' type="submit" ></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Create a new todo...' onChange={props.onChange} ></input> 
        </form>
    </div>
  )
}

export default TaskForm