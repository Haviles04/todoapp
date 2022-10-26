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
      <span>{todoList.length} items</span>
    </div>


    </div>
  );
}

export default TaskList;
