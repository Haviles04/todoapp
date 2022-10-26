import React from "react";
import "./taskList.css";

function TaskList(props) {
  function completeTask(id) {
    props.todoList.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return props.todoList;
    });
  }

function pluralize(){
  if(props.todoList.length > 1 || props.todoList.length < 1){
    return `${props.todoList.length} items`;
  } else {
    return `${props.todoList.length} item`;
  }
}


  return (
    <div className="taskDisplay">
      {props.todoList.map((todo) => (
        <div key={todo.id} className="todoList">
          <label>
            <input
              type="checkbox"
              display="hidden"
              name={`checkID${todo.id}`}
              onClick={() => completeTask(todo.id)}
              className="checkComplete"
            ></input>
            <span className="checkboxSpan"/>
            <span className="todoText">{todo.text}</span> 
          </label>
        </div>
      ))}

    <div className="completedActiveOptions">
      <span className="todoCount">{pluralize()}</span>
      <input type="radio" name="all" className="completeActiveAllOptions" />
      <label for="all">All</label>
      <input type="radio" name="active" className="completeActiveAllOptions" />
      <label for="active">Active</label>
      <input type="radio" name="completed" className="completeActiveAllOptions" />
      <label for="completed">Completed</label>
      
      


    </div>
    </div>
  );
}

export default TaskList;
