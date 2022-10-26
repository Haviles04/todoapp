import React, { useState } from "react";
import "./taskItem.css";

function TaskItem({ listType, todoList }) {
 
  const [displayList, setDisplayList] = useState([]);


  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        if(listType === 'active'){
          SetDisplayList([...todoList].filter((todo) => !todo.complete));
        }
      }
    });
  }
  
  if (listType === "all") {
    setDisplayList([...todoList]);
  } else if (listType === "active") {
    setDisplayList([...todoList].filter((todo) => !todo.complete));
  } else {
    setDisplayList([...todoList].filter((todo) => todo.complete));
  }


  return (
    <>
      {displayList.map((todo) => {
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
