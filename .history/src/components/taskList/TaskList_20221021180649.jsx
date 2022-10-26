import React from 'react'
import './taskList.css'

function TaskList(props) {

  function completeTask(){
    props.todoList.complete = true;
  }

  
  return (
    <div className='taskDisplay'>
       {props.todoList.map( (todo) => <div key={todo.key} className='todoList'><button onClick={completeTask} className='circleBtn'></button><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList