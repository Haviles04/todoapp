import React from "react";
import './taskItem.css'


function TaskItem(props) {

    return (
   <>
    {props.todoList.map( (todo) => {if(todo.complete){
              <div id={`div ${todo.id}`} key={todo.id} className="todoList">
              <label>
                <input
                  type="checkbox"
                  display="hidden"
                  name={`checkID${todo.id}`}
                  onClick={ () => props.completeTask(todo.id)}
                  className="checkComplete"
                  defaultChecked
                ></input>
                <span className="checkboxSpan" />
                <span className="todoText">{todo.text}</span>
              </label>
            </div>
    }else{
      <div id={`div ${todo.id}`} key={todo.id} className="todoList">
      <label>
        <input
          type="checkbox"
          display="hidden"
          name={`checkID${todo.id}`}
          onClick={ () => props.completeTask(todo.id)}
          className="checkComplete"
        ></input>
        <span className="checkboxSpan" />
        <span className="todoText">{todo.text}</span>
      </label>
    </div>
    }})}
    </> 
  )
}

export default TaskItem

