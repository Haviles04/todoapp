import React from 'react'
import './taskList.css'

function TaskList(props) {
  
  
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div className='todoList'><input name={todo.key} type="checkbox" onClick={props.setComplete} className='completedCheck'></input><label for={todo.key}>{todo.text}</label></div>)}
    </div>
  )
}

export default TaskList