import React, { useEffect, useState } from "react";
import "./taskItem.css";

function TaskItem({ listType, todoList, setTodoList }) {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [displayList, setDisplayList] = useState([]);


  useEffect(whichListIsActive(listType), [todoList])
  //determines which list type to display
  function whichListIsActive(listType) {
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

  //forces a reset of todolist to update state to refresh active
  function isListTypeActive() {
    if (listType === "active") {
      setTodoList([...todoList]);
    }
  }

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        setTodoList([...todoList]);
        isListTypeActive();
      }
    });
  }

  //handles logic to show or hide delete button based on hover
  function handleMouseOver() {
    setShowDeleteBtn(true);
  }
  function handleMouseOut() {
    setShowDeleteBtn(false);
  }

  //deletes individual todo
  function deleteTodo(id) {
    const arrAfterDelete = [...todoList].filter((todo) => todo.id !== id);
    setTodoList(arrAfterDelete);
  }

  return (
    <>
      {displayList.map((todo) => {
        if (todo.complete) {
          return (
            <div
              id={`container_${todo.id}`}
              key={todo.id}
              className="todoListItem"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
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
              {showDeleteBtn && (
                <button
                  className="deleteButton"
                  onClick={() => deleteTodo(todo.id)}
                ></button>
              )}
            </div>
          );
        } else {
          return (
            <div
              id={`container_${todo.id}`}
              key={todo.id}
              className="todoListItem"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
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
                <button
                  className="deleteButton"
                  onClick={() => deleteTodo(todo.id)}
                ></button>
              )}
            </div>
          );
        }
      })}
    </>
  );
}

export default TaskItem;
