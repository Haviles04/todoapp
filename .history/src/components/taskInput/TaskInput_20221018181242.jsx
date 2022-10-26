import React from 'react'
import './taskInput.css'


function TaskInput(props) {
    
  return (
    <div className='inputContainer'>
        <form>
            <button id='taskBtn' className='taskBtn' type="submit" onSubmit={this.props.handleClick} ></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Create a new todo...' value={this.state.todo}></input> 
        </form>
    </div>
  )
}

export default TaskInput