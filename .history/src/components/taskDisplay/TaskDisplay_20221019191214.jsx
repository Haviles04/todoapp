import React from 'react'
import './taskDisplay.css'

function TaskDisplay(props) {
  
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div>{todo.text}</div>)}
    </div>
  )
}

export default TaskDisplay