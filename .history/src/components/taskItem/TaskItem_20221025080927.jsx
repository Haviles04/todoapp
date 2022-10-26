import React, { useEffect, useState } from "react";
import "./taskItem.css";

function TaskItem({ listType, todoList,setTodoList, setPlural }) { 
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);


  //handles logic to show or hide delete button based on hover
  function handleMouseOver() {
    setShowDeleteBtn(true);
  }
  
  function handleMouseOut(){
    setShowDeleteBtn(false);
  }
  
  let displayList = [];
 
  //determines which list type to display  
  if (listType === "all") {
    displayList = [...todoList];
  } else if (listType === "active") {
    displayList = [...todoList].filter((todo) => !todo.complete);
  } else {
    displayList = [...todoList].filter((todo) => todo.complete);
  }

  //forces a reset of todolist to update state to refresh active
  function isListTypeActive(){
    if (listType === "active") {
      setTodoList([...todoList]);
    }
  }

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        isListTypeActive();
        pluralize();
        localStorage.setItem("todoList", JSON.stringify(todoList));
      }
    });
  }

  function deleteTodo(id){
   const arrAfterDelete = [...todoList].filter( (todo) => (!todo.id === id))
      setTodoList(arrAfterDelete);
      }
  
  
    //Checks to see how many items are on the list, and makes "item" plural
    useEffect(pluralize)
    function pluralize() {
      setPlural(() => {
        let countOverOne = [...todoList].filter(
          (todo) => !todo.complete
        ).length;
        if (countOverOne === 1) {
          return `${countOverOne} item left`;
        } else {
          return `${countOverOne} items left`;
        }
      });
    }

  return (
    <>
      {displayList.map((todo) => {
        if (todo.complete) {
          return (
            <div id={`container_${todo.id}`} key={todo.id} className="todoListItem" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
              {showDeleteBtn &&(
                <button className="deleteButton" onClick={ () => deleteTodo(todo.id)}></button>
              )}
            </div>
          );
        } else {
          return (
            <div id={`container_${todo.id}`} key={todo.id} className="todoListItem" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
              {showDeleteBtn && (
                <button className="deleteButton" onClick={ () => deleteTodo(todo.id)}></button>
              )}
            </div>
          );
        }
      })}
    </>
  );
}

export default TaskItem;
