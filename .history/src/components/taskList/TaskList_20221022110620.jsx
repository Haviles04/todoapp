import React from "react";
import "./taskList.css";

function TaskList(props) {
  // Checks to see how many items are on the list, and makes "item" plural
  let plural;

  function pluralize() {
    let countOverOne = props.todoList.filter((todo) => !todo.complete).length;

    if (countOverOne === 1) {
      plural = `${countOverOne} item left`;
    } else {
      plural = `${countOverOne} items left`;
    }
    return plural;
  }

  console.log(plural);

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    props.todoList.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      pluralize();
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
            <span className="checkboxSpan" />
            <span className="todoText">{todo.text}</span>
          </label>
        </div>
      ))}

      <div className="completedActiveOptions">
        <span className="todoCount">{plural}</span>
        <form>
          <input
            id="all"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
          />
          <label className="todoStatusLabel" for="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
          />
          <label className="todoStatusLabel" for="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
          />
          <label className="todoStatusLabel" for="completed">
            Completed
          </label>
        </form>
        <button className="clearComplete">Clear Completed</button>
      </div>
    </div>
  );
}

export default TaskList;
