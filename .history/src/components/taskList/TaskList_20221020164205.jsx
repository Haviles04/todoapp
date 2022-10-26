import React from 'react'
import './taskDisplay.css'

function TaskList(props) {
  
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div className='todoList'><button className='circleBtn'></button><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList