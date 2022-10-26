import React from "react";
import "./optionsFooter.css";

function OptionsFooter(props) {
  //clears Completed from array
  function clearComplete() {
    let activeArray = [...props.todoList].filter((todo) => !todo.complete);
    props.setTodoList(activeArray);
  }

  return (
    <div className="completedActiveOptions">
      <span className="todoCount">{props.plural}</span>
      <div className="options">
        <form>
          <input
            id="all"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={() => props.setListType("all")}
            defaultChecked
          />
          <label className="todoStatusLabel" htmlFor="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={() => props.setListType("active")}
          />
          <label className="todoStatusLabel" htmlFor="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={() => props.setListType("completed")}
          />
          <label className="todoStatusLabel" htmlFor="completed">
            Completed
          </label>
        </form>
      </div>
      <button className="clearComplete" onClick={clearComplete}>
        Clear Completed
      </button>
    </div>
  );
}

export default OptionsFooter;
