import React, { useState, useEffect } from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList(props) {
   
  const [activeList, setActiveList] = useState([...props.todoList].filter((todo) => !todo.complete)); 
  const [completedList, setCompletedList] = useState([...props.todoList].filter((todo) => todo.complete));
  const [allList, setAllList] = useState([...props.todoList]);
  const [listType, setListType] = useState(allList);
  const [plural, setPlural] = useState("");
  useEffect( () => pluralize() );
  
  //Checks to see how many items are on the list, and makes "item" plural
  function pluralize() {
    setPlural( () => {
      let countOverOne = [...props.todoList].filter(
        (todo) => !todo.complete
      ).length;
      if (countOverOne === 1) {
        return `${countOverOne} item left`;
      } else {
        return `${countOverOne} items left`;
      }
    });
  }

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    props.todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
  }
  //clears Completed from array
  function clearComplete() {
    let activeArray = [...props.todoList].filter((todo) => !todo.complete);
    props.setTodoList(activeArray);
    setCompletedList([...props.todoList].filter((todo) => !todo.complete));
    setActiveList([...props.todoList].filter((todo) => !todo.complete));
    setAllList([...props.todoList]);
  }

  return (
    <div className="taskDisplay">
      <TaskItem listType={listType} completeTask={completeTask} />
      <OptionsFooter
        plural={plural}
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
