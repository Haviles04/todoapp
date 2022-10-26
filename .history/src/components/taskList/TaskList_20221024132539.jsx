import React, { useState } from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList({ todoList, setTodoList }) {
  const [listType, setListType] = useState("all");

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
  }


  return (
    <div className="taskDisplay">
      <TaskItem
        todoList={todoList}
        listType={listType}
        completeTask={completeTask}
      />
      <OptionsFooter
        todoList={todoList}
        setListType={setListType}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default TaskList;
