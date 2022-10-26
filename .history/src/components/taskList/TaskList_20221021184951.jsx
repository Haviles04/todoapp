import React from 'react'
import './taskList.css'
import iconCheck from '../../assests/icon-check.svg'

function TaskList(props) {

  function completeTask(id){
    props.todoList.map( (todo) => {
      if(todo.id === id){
        todo.complete = !todo.complete;
        document.getElementById(' "button" + {todo.id} ').style.backgroundimage={iconCheck};
      } return props.todoList;

  
    })
  }

  
  return (
    <div className='taskDisplay'>
       {props.todoList.map( (todo) => <div key={todo.id} className='todoList'><button id={' "button" + {todo.id} '} onClick={() => completeTask(todo.id)} className='circleBtn'></button><span>{todo.text}</span></div>)}
    </div>
  )
}

export default TaskList