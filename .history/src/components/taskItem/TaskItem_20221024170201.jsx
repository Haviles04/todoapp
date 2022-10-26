import React from "react";
import "./taskItem.css";

function TaskItem({ listType, todoList,setTodoList }) {
  let displayList = [];
 
  //determines which list type to display  
  if (listType === "all") {
    displayList = [...todoList];
  } else if (listType === "active") {
    displayList = [...todoList].filter((todo) => !todo.complete);
  } else {
    displayList = [...todoList].filter((todo) => todo.complete);
  }

  //forces a reset of todolist to hide todos checked as complete while in the active list
  function isListTypeActive(){
    if (listType === "active") {
      setTodoList([...todoList]);
      displayList = [...todoList].filter((todo) => !todo.complete);
    }
  }

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        isListTypeActive();
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
