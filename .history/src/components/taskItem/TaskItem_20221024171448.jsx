import React, { useEffect, useState } from "react";
import "./taskItem.css";

function TaskItem({ listType, todoList, setTodoList }) {
  
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => listStatus());

  function listStatus() {
    setDisplayList(() => {
      if (listType === "all") {
        return [...todoList];
      } else if (listType === "active") {
        return [...todoList].filter((todo) => !todo.complete);
      } else {
        return [...todoList].filter((todo) => todo.complete);
      }
    });
  }

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
  }

  return (
    <>
      {displayList.map((todo) => {
        if (todo.complete) {
          return (
            <div id={`container_${todo.id}`} key={todo.id} className="todoList">
              <label>
                <input
                  type="checkbox"
                  display="hidden"
                  name={`checkID${todo.id}`}
                  onClick={() => completeTask(todo.id)}
                  className="checkComplete"
                  defaultChecked
                ></input>
                <span className="checkboxSpan" />
                <span className="todoText">{todo.text}</span>
              </label>
            </div>
          );
        } else {
          return (
            <div id={`container_${todo.id}`} key={todo.id} className="todoList">
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
          );
        }
      })}
    </>
  );
}

export default TaskItem;
