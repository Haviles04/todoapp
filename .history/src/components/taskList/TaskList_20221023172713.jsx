import React, { useEffect, useState } from "react";
import TaskItem from "../taskItem/TaskItem";
import "./taskList.css";

function TaskList(props) {
  // Checks to see how many items are on the list, and makes "item" plural
  const [plural, setPlural] = useState("");
  const [listType, setListType] = useState(allList);

  useEffect(() => pluralize());

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
  }



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

  const completedList = props.todoList.filter( (todo) => todo.complete);

  const activeList = props.todoList.filter( (todo) => !todo.complete);

  return (
    <div className="taskDisplay">
      <TaskItem listType={listType} completeTask={completeTask} />
      <div className="completedActiveOptions">
        <span className="todoCount">{plural}</span>
        <form>
          <input
            id="all"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={setListType(allList)}
          />
          <label className="todoStatusLabel" for="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={setListType(activeList)}
          />
          <label className="todoStatusLabel" for="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={setListType(completedList)}
          />
          <label className="todoStatusLabel" for="completed">
            Completed
          </label>
        </form>
        <button className="clearComplete" onClick={clearComplete}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TaskList;
