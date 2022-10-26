import React from 'react'
import './taskDisplay.css'

function TaskDisplay(props) {
  
  
  return (
    <div className='taskDisplay'>
       {props.toDoList.map( (todo) => <div className='todoDisplay'><button className='.taskBtn'></button>{todo.text}</div>)}
    </div>
  )
}

export default TaskDisplay