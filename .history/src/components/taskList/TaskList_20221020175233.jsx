import React from 'react'
import './taskList.css'

function TaskList(props) {

  function setCompleted(todo){
    if(!todo.complete){
      todo.complete = true;
    }else {
      todo.complete = false;
    }
  }
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div key={todo.key} className='todoList'><button onClick={ () => setCompleted(todo)} className='circleBtn'></button><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList