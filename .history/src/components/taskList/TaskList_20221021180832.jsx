import React from 'react'
import './taskList.css'

function TaskList(props) {

  function completeTask(){
    
  }

  
  return (
    <div className='taskDisplay'>
       {props.todoList.map( (todo) => <div key={todo.id} className='todoList'><button onClick={() => completeTask(todo.id)} className='circleBtn'></button><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList