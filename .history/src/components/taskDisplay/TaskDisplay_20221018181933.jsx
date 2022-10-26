import React from 'react'
import './taskDisplay.css'

function TaskDisplay(props) {
  
  
  return (
    <div className='taskDisplay'>
        {this.props.toDoList.map((todo) => <div key={this.props.todo.text}>{this.props.todo.text}</div)}
    </div>
  )
}

export default TaskDisplay