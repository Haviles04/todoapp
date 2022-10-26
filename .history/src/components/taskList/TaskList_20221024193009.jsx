import React, { useState } from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList({ todoList, setTodoList }) {
  const [listType, setListType] = useState("all");
  const [plural, setPlural] = useState("");
  

  return (
    <div className="taskDisplay">
      <TaskItem
        todoList={todoList}
        listType={listType}
        setPlural={setPlural}
        setTodoList={setTodoList}
      />
      <OptionsFooter
        plural={plural}
        todoList={todoList}
        setListType={setListType}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default TaskList;
