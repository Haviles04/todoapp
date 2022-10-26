import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import Header from "./components/header/Header";

const toDoList = [];

function App() {
  const [todo, setTodo] = useState("");
  

  function onChange(e){
    setTodo(e.target.value);
  }
  
  function handleClick(e) {
    
    e.preventDefault();

    const newTodo = {
      text: todo,
      complete: false,
    };

    setTodo("");
    toDoList.push(newTodo);
    document.getElementById('taskInput').value = "";

  
  }

  function setComplete(e) {
    if(!todo.complete){
    todo.complete = true}
  }


  console.log(toDoList);

  return (
    <div className="App">
      <Header />
      <TaskForm onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskList setComplete={setComplete} toDoList={toDoList} />
    </div>
  );
}

export default App;
