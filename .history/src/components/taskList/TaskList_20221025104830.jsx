import React, { useEffect, useState } from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList({ todoList, setTodoList, theme }) {
  const [listType, setListType] = useState("all");
  const [plural, setPlural] = useState("");

  //Checks to see how many items are on the list, and makes "item" plural
  useEffect(pluralize);
  function pluralize() {
    setPlural(() => {
      let countOverOne = [...todoList].filter((todo) => !todo.complete).length;
      if (countOverOne === 1) {
        return `${countOverOne} item left`;
      } else {
        return `${countOverOne} items left`;
      }
    });
  }

  return (
    <div className={`taskDisplay taskDisplay_${theme}`}>
      <TaskItem
        todoList={todoList}
        listType={listType}
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
