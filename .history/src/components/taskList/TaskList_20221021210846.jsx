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
          <span className="checkboxSpan">
            <input
              type="checkbox"
              display="hidden"
              name={`checkID${todo.id}`}
              onClick={() => completeTask(todo.id)}
              className="checkComplete"
            ></input>
            </span>
          </label>
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
