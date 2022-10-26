import React from "react";
import "./taskList.css";
import TaskItem from "../taskItem/TaskItem";
import OptionsFooter from "../optionsFooter/OptionsFooter";

function TaskList(props) {
  const [listType, setListType] = useState([...props.todoList]);
  let allList = [...props.todoList];
  let completedList = [...props.todoList].filter((todo) => todo.complete);
  let activeList = [...props.todoList].filter((todo) => !todo.complete);

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    props.todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
  }

  function clearComplete() {
    let activeArray = [...todoList].filter((todo) => !todo.complete);
    setTodoList(activeArray);
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
