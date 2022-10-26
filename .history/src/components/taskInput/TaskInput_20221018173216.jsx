import React from 'react'
import './taskInput.css'


function TaskInput() {
    
  return (
    <div className='inputContainer'>
        <form>
            <button id='taskBtn' className='taskBtn' type="submit" onSubmit={handleClick} value={this.props.todo}></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Create a new todo...' value={todo}></input> 
        </form>
    </div>
  )
}

export default TaskInput