import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskDisplay from "./components/taskDisplay/TaskDisplay";
import Header from "./components/header/Header";

function App() {
  const [todo, setTodo] = useState("");
  const toDoList = [];

  function onChange(e){
    setTodo(e.target.value);
  }
  
  function handleClick(e) {
    
    e.preventDefault();

    const newTodo = {
      text: todo,
      complete: false,
    };

    toDoList.push(newTodo)
    console.log(toDoList);
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
