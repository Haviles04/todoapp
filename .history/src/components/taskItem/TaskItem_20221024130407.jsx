import React, { useEffect, useRef } from "react";
import "./taskItem.css";

function TaskItem({ completeTask, listType, todoList }) {
  let displayList = [];
  const newDisplayList = useRef(displayList);

  useEffect( () => {
    if (listType === "all") {
      newDisplayList.current = [...todoList];
    } else if (listType === "active") {
      newDisplayList.current = [...todoList].filter((todo) => !todo.complete);
    } else {
      newDisplayList.current = [...todoList].filter((todo) => todo.complete);
    }
  });

  return (
    <>
      {newDisplayList.current.map((todo) => {
        if (todo.complete) {
          return (
            <div id={`div ${todo.id}`} key={todo.id} className="todoList">
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
            <div id={`div ${todo.id}`} key={todo.id} className="todoList">
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
