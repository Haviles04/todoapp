import React, { useState } from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList({todoList, setTodoList}) {
  
  const [listType, setListType] = useState("all");
  
  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
  }
  //clears Completed from array
  function clearComplete() {
    let activeArray = [...todoList].filter((todo) => !todo.complete);
    setTodoList(activeArray);
  }

  function displayListType(listType){
    if(listType === "all"){
      <TaskItem displayList={[...todoList]} /> 
    } else if(listType === "active"){
      <TaskItem displayList={[...todoList].filter((todo)=> !todo.complete)} /> 
    } else {
      <TaskItem displayList={[...todoList].filter((todo) => todo.complete)} /> 
    }
  }

  return (
    <div className="taskDisplay">
      {displayListType()}
      <OptionsFooter
        todoList={todoList}
        setListType={setListType}
        clearComplete={clearComplete}
      />
    </div>
  );
}

export default TaskList;
