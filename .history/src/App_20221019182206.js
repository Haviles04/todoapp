import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskDisplay from "./components/taskDisplay/TaskDisplay";
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
    document.getElementById('taskInput').value = "";

    toDoList.push(newTodo);
  }

  console.log(toDoList)

  return (
    <div className="App">
      <Header />
      <TaskInput onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskDisplay />
    </div>
  );
}

export default App;
