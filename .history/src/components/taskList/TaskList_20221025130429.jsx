import React, { useEffect, useState } from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList({ todoList, setTodoList, theme }) {
  const [listType, setListType] = useState("all");
  const [plural, setPlural] = useState("");

  //Checks to see how many items are on the list, and makes "item" plural passes plural to display in footer
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
        theme={theme}
        todoList={todoList}
        listType={listType}
        setTodoList={setTodoList}
      />
      <OptionsFooter
        theme={theme}
        plural={plural}
        todoList={todoList}
        setListType={setListType}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default TaskList;
