import React from "react";
import './taskItem.css'


function TaskItem(props) {

    return (
   <>
    {props.listType.map((todo) => (
        <div id={`div ${todo.id}`} key={todo.id} className="todoList">
          <label>
            <input
              type="checkbox"
              display="hidden"
              name={`checkID${todo.id}`}
              onClick={ () => props.completeTask(todo.id)}
              className="checkComplete"
              checked={todo.complete ? true : false}
            ></input>
            <span className="checkboxSpan" />
            <span className="todoText">{todo.text}</span>
          </label>
        </div>
      ))}
    </> 
  )
}

export default TaskItem