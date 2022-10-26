import React, {useEffect, useRef} from "react";
import "./taskItem.css";

function TaskItem({ completeTask, listType, todoList }) {
  let displayList = [];
  const newDisplayList = useRef(displayList);

  
  useEffect( (listType) => {
    if (listType === 'active'){
      newDisplayList.current = [...todoList].filter((todo) => !todo.complete)
    }
  }, [todoList])


  
  if (listType === "all") {
    displayList = [...todoList];
  } else if (listType === "active") {
    displayList = newDisplayList.current;
  } else {
    displayList = [...todoList].filter((todo) => todo.complete);
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
