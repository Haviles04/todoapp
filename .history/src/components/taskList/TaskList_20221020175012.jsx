import React from 'react'
import './taskList.css'

function TaskList(props) {

  function setCompleted(){

  }
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div key={todo.key} className='todoList'><button onClick={ () => this.setCompleted} className='circleBtn'></button><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList