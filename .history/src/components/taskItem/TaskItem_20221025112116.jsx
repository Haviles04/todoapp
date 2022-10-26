import React, { useEffect, useState } from "react";
import "./taskItem.css";

function TaskItem({theme, listType, todoList, setTodoList }) {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [displayList, setDisplayList] = useState([]);

  //sets "displayList" determining which version of todolist to show based if "all", "active", or "completed" are selected
  useEffect(() => {
    setDisplayList(() => {
      if (listType === "all") {
        return [...todoList];
      } else if (listType === "active") {
        return [...todoList].filter((todo) => !todo.complete);
      } else {
        return [...todoList].filter((todo) => todo.complete);
      }
    });
  }, [listType, todoList]);


  //sets the current todo as complete inside of the array
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        setTodoList([...todoList]);
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
              className={`todoListItem todoListItem_${theme}`}
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
                <span className= {`checkboxSpan checkboxSpan_${theme}`} />
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
              className={`todoListItem todoListItem_${theme}`}
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
                <span className={`checkboxSpan checkboxSpan_${theme}`} />
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
