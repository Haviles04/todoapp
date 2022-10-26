import React, { useEffect, useState } from "react";
import "./taskList.css";

function TaskList(props) {
  // Checks to see how many items are on the list, and makes "item" plural
  const [plural, setPlural] = useState("");
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

  //sets the current todo as complete inside of the array, runs pluralize to change "task left" at bottom
  function completeTask(id) {
    props.todoList.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      pluralize();
      return props.todoList;
    });
  }

  //clears all completed todos from todo list as well as todoList array
  function clearComplete() {
    let activeArray = [...props.todoList].filter((todo) => !todo.complete);
    props.setTodoList(activeArray);
  }


  //Only shows completed todos within todolist
  
  const [displayComplete, setDisplaycomplete] = useState()
 
  useEffect( () => {
    setDisplaycomplete(
    props.todoList.forEach((todo) => {
      if(!todo.complete){
        document.getElementById(`div ${todo.id}`).style.display="none";
      }
    }))}, [props.todoList])

    function displayCompleteList(){
      props.todoList.forEach((todo) => {
        if(!todo.complete){
          document.getElementById(`div ${todo.id}`).style.display="none";
        }
      })
    }
  
  //displays all todos within todolist
    const [displayAll, setDisplayAll] = useState()

    useEffect( () => {
      props.todoList.forEach( (todo) => {
        document.getElementById(`div ${todo.id}`).style.display="flex";
      })
    }, [props.todoList])

  setDisplayAll(
    props.todoList.forEach( (todo) => {
      document.getElementById(`div ${todo.id}`).style.display="flex";
    })
  )
  

  return (
    <div className="taskDisplay">
      {props.todoList.map((todo) => (
        <div id={`div ${todo.id}`} key={todo.id} className="todoList">
          <label>
            <input
              type="checkbox"
              display="hidden"
              name={`checkID${todo.id}`}
              onClick={() => completeTask(todo.id)}
              className="checkComplete"
            ></input>
            <span className="checkboxSpan" />
            <span className="todoText">{todo.text}</span>
          </label>
        </div>
      ))}

      <div className="completedActiveOptions">
        <span className="todoCount">{plural}</span>
        <form>
          <input
            id="all"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={displayAllList}
          />
          <label className="todoStatusLabel" for="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
          />
          <label className="todoStatusLabel" for="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={displayCompleteList}
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
