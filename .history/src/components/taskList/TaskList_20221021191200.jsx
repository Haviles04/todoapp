import React from 'react'
import './taskList.css'
import iconCheck from '../../assests/icon-check.svg'

function TaskList(props) {

  function completeTask(id){
    props.todoList.map( (todo) => {
      if(todo.id === id){
        todo.complete = !todo.complete;
        document.getElementById(todo.id).style.backgroundImage={iconCheck};
      } return props.todoList;

  
    })
  }

  
  return (
    <div className='taskDisplay'>
       {props.todoList.map( (todo) => <div key={todo.id} className='todoList'><input type="checkbox" onClick={() => completeTask(todo.id)} className='circleBtn completed'></input><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList