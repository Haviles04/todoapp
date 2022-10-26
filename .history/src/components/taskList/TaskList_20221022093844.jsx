import React from "react";
import "./taskList.css";

function TaskList(props) {
  function completeTask(id) {
    props.todoList.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return props.todoList;
    });
  }

  // Checks to see how many items are on the list, and makes "item" plural 
  function pluralize() {
    if (props.todoList.length > 1 || props.todoList.length < 1) {
      return `${props.todoList.length} items`;
    } else {
      return `${props.todoList.length} item`;
    }
  }

 //Shows all the active todo (!todo.complete) 
  function showActiveTodo(){
    let newTodoListArr = [];
    props.todoList.map( (todo) => {
      if(!todo.complete){
        newTodoListArr.push(todo);
      } 
     return props.setTodoList(newTodoListArr);
    })
  }

  function showAllTodo(){
    let newTodoListArr = [];
    props.todoList.map( (todo) => {
      newTodoListArr.push(todo)
    } 
      return props.setTodoList(newTodoListArr)
    )
  }


  return (
    <div className="taskDisplay">
      {props.todoList.map((todo) => (
        <div key={todo.id} className="todoList">
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
        <span className="todoCount">{pluralize()}</span>
        <form>
          <input
            id="all"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={showAllTodo}
          />
          <label className="todoStatusLabel" for="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={showActiveTodo}
          />
          <label className="todoStatusLabel" for="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
          />
          <label className="todoStatusLabel" for="completed">
            Completed
          </label>
        </form>
        <button className="clearComplete">Clear Completed</button>
      </div>
    </div>
  );
}

export default TaskList;
