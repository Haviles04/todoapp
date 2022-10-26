import React from "react";
import "./taskForm.css";

function TaskForm({theme, handleClick, onChange}) {
  return (
    <div className={`inputContainer inputContainer_${theme}`}>
      <form onSubmit={handleClick}>
        <button id="taskBtn" className="circleBtn" type="submit"></button>
        <input
          id="taskInput"
          className={`taskInput taskInput_dark`}
          type="text"
          placeholder="Create a new todo..."
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
}

export default TaskForm;
