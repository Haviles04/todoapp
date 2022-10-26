import React, { useState } from "react";
import OptionsFooter from "../optionsFooter/OptionsFooter";
import TaskItem from "../taskItem/TaskItem";
import "./taskList.css";

function TaskList(props) {
  // Checks to see how many items are on the list, and makes "item" plural
  //const [plural, setPlural] = useState("");

  /*useEffect(() => pluralize());

  function pluralize() {
    setPlural(() => {
      let countOverOne = [...props.todoList].filter(
        (todo) => !todo.complete
      ).length;
      if (countOverOne === 1) {
        return `${countOverOne} item left`;
      } else {
        return `${countOverOne} items left`;
      }
    });
  } */

  //clears all completed todos from todo list as well as todoList array
  function clearComplete() {
    let activeArray = [...props.todoList].filter((todo) => !todo.complete);
    props.setTodoList(activeArray);
  }

  //Only shows completed todos within todolist

  /* function displayCompleteList() {
    if (document.getElementById("completed").checked) {
      props.todoList.forEach((todo) => {
        if (!todo.complete) {
          document.getElementById(`div ${todo.id}`).style.display = "none";
        } else {
          document.getElementById(`div ${todo.id}`).style.display = "flex";
        }
      });
    }
  }

  //uses useEffect to update list so uncompleted task are hidden everytime a task is entered.

  useEffect(() => {
    if (document.getElementById("completed").checked) {
      props.todoList.forEach((todo) => {
        if (!todo.complete) {
          document.getElementById(`div ${todo.id}`).style.display = "none";
        } else {
          document.getElementById(`div ${todo.id}`).style.display = "flex";
        }
      });
    }
  }, [props.todoList]);

  //shows Active Todos

  function displayActiveList() {
    if (document.getElementById("active").checked) {
      props.todoList.forEach((todo) => {
        if (todo.complete) {
          document.getElementById(`div ${todo.id}`).style.display = "none";
        } else {
          document.getElementById(`div ${todo.id}`).style.display = "flex";
        }
      });
    }
  }

  //uses useEffect to update list so unactive task are hidden everytime a task is entered.

  useEffect(() => {
    if (document.getElementById("active").checked) {
      props.todoList.forEach((todo) => {
        if (todo.complete) {
          document.getElementById(`div ${todo.id}`).style.display = "none";
        } else {
          document.getElementById(`div ${todo.id}`).style.display = "flex";
        }
      });
    }
  });

  //shows all todos

  function displayAllList() {
    props.todoList.forEach((todo) => {
      document.getElementById(`div ${todo.id}`).style.display = "flex";
    });
  }

  useEffect(() => {
    if (document.getElementById("all").checked) {
      props.todoList.forEach((todo) => {
        document.getElementById(`div ${todo.id}`).style.display = "flex";
      });
    }
  }, [props.todoList]); */

  const allList = props.todoList;

  const completedList = props.todoList.filter((todo) => todo.complete);

  const activeList = props.todoList.filter((todo) => !todo.complete);
  const [listType, setListType] = useState(allList);

  return (
    <div className="taskDisplay">
      <TaskItem listType={listType} />
      <OptionsFooter
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
