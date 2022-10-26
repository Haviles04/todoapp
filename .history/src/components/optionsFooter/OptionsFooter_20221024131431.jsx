import React, { useEffect, useState } from "react";
import "./optionsFooter.css";

function OptionsFooter(props) {
  const [plural, setPlural] = useState("");
  useEffect(() => pluralize());

  //Checks to see how many items are on the list, and makes "item" plural
  function pluralize() {
    setPlural(() => {
      let countOverOne = [...props.todoList].filter(
        (todo) => !todo.complete
      ).length;
      if (countOverOne === 1) {
        return `${countOverOne} item left`;
      } else {
        return `${countOverOne} items left`;
      }
    });
  }

    //clears Completed from array
    function clearComplete() {
      let activeArray = [...todoList].filter((todo) => !todo.complete);
      prop.setTodoList(activeArray);
    }

  return (
    <div className="completedActiveOptions">
      <span className="todoCount">{plural}</span>
      <form>
        <input
          id="all"
          type="radio"
          name="completeActiveAll"
          className="completeActiveAll"
          onClick={() => props.setListType("all")}
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
      <button className="clearComplete" onClick={() => props.clearComplete}>
        Clear Completed
      </button>
    </div>
  );
}

export default OptionsFooter;
