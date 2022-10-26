import React from 'react'
import './taskDisplay.css'

function TaskDisplay(props) {
  
  
  return (
    <div className='taskDisplay'>
        {props.toDoList}
    </div>
  )
}

export default TaskDisplay