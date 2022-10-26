import React from 'react'
import './taskList.css'

function TaskList(props) {
  
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div id={'task' + todo.key} className='todoList'><button onClick={ (todo) => props.setComplete} className='circleBtn'></button><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList