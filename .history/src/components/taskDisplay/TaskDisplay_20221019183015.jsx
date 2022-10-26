import React from 'react'
import './taskDisplay.css'

function TaskDisplay(props) {
  
  
  return (
    <div className='taskDisplay'>
        {props.toDoList.map()}
    </div>
  )
}

export default TaskDisplay