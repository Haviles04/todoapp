import React from 'react'
import './taskInput.css'


function TaskInput(props) {
    
  return (
    <div className='inputContainer'>
        <form onSubmit={props.handleClick}>
            <button id='taskBtn' className='circleBtn' type="submit" ></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Create a new todo...' onChange={props.onChange} ></input> 
        </form>
    </div>
  )
}

export default TaskInput