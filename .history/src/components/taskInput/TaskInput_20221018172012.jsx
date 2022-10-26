import React from 'react'
import './taskInput.css'

function TaskInput() {
  
  const handleSubmit = (e) => {
    setToDo(e);
  }
  
  return (
    <div className='inputContainer'>
        <form>
            <button id='taskBtn' className='taskBtn' type="submit" onSubmit={handleSubmit}></button>
            <input id='taskInput' className='taskInput' type="text" placeholder='Create a new todo...'></input> 
        </form>
    </div>
  )
}

export default TaskInput