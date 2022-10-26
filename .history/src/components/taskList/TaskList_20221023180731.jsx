import React from "react";
import "./taskList.css";

function TaskList() {
  



  //clears all completed todos from todo list as well as todoList array



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



  return (
    <div className="taskDisplay"> 
    </div>
  );
}

export default TaskList;
