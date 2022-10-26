import React from 'react'
import './taskList.css'

function TaskList(props) {
  
  
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div className='todoList'><input type="checkbox" onClick={props.setComplete} className='circleBtn'></input><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList