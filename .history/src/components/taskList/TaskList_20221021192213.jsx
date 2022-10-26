import React from 'react'
import './taskList.css'
import iconCheck from '../../assests/icon-check.svg'

function TaskList(props) {

  function completeTask(id){
    props.todoList.map( (todo) => {
      if(todo.id === id){
        todo.complete = !todo.complete;
      } return props.todoList;

  
    })
  }

  
  return (
    <div className='taskDisplay'>
       {props.todoList.map( (todo) => <div key={todo.id} className='todoList'><input type="checkbox" name={`checkID'${todo.id}`} onClick={() => completeTask(todo.id)} className='checkComplete'></input><label for={`checkID'${todo.id}`}>{todo.text}</label></div>)}
    </div>
  )
}

export default TaskList