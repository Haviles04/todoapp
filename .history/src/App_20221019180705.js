import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskDisplay from "./components/taskDisplay/TaskDisplay";
import Header from "./components/header/Header";

function App() {
  const [todo, setTodo] = useState("");
  const toDoList = [];

 
  
  function handleClick(e) {
    
    e.preventDefault();
    setTodo(e.target.value); 

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
      <TaskInput  handleClick={handleClick} todo={todo} />
      <TaskDisplay />
    </div>
  );
}

export default App;
