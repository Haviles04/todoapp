import React, { useState } from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList({todoList, setTodoList}) {
  
  let activeList = [...todoList].filter((todo) => !todo.complete);
  let allList = [...todoList];

  const [completedList, setCompletedList] = useState([]);
  
  const [listType, setListType] = useState(allList);
  
  
  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      setCompletedList([...todoList].filter((todo) => todo.complete))
    });
  }
  //clears Completed from array
  function clearComplete() {
    let activeArray = [...todoList].filter((todo) => !todo.complete);
    setTodoList(activeArray);
    setCompletedList([]);
  }

  return (
    <div className="taskDisplay">
      <TaskItem listType={listType} completeTask={completeTask} />
      <OptionsFooter
        todoList={todoList}
        setListType={setListType}
        allList={allList}
        completedList={completedList}
        activeList={activeList}
        clearComplete={clearComplete}
      />
    </div>
  );
}

export default TaskList;
