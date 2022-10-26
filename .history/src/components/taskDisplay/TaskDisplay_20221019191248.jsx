import React from 'react'
import './taskDisplay.css'

function TaskDisplay(props) {
  
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div className='todoDisplay'>{todo.text}</div>)}
    </div>
  )
}

export default TaskDisplay