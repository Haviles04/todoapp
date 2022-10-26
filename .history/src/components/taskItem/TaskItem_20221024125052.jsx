import React, { useEffect, useState } from "react";
import "./taskItem.css";

function TaskItem({ completeTask, listType, todoList }) {
  

  const [displayList, setDisplayList] = useState([])
    
    
  useEffect( (todoList) => { 
  if (listType === "all") {
    setDisplayList([...todoList]);
  } else if (listType === "active") {
    setDisplayList([...todoList].filter((todo) => !todo.complete));
  } else {
    setDisplayList([...todoList].filter((todo) => todo.complete));
  }}  , [todoList])

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
