import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskDisplay from "./components/taskDisplay/TaskDisplay";
import Header from "./components/header/Header";

function App() {
  const [todo, setTodo] = useState({});
  const toDoList = [];

  function onChange(e){
    setTodo(e.target.text);
    console.log(e.target.text)
  }
  
  function handleClick(e) {
    e.preventDefault();

    const newTodo = {
      text: todo,
      complete: false,
    };

    toDoList.push(newTodo.text);

  }

  console.log(todo.text);

  return (
    <div className="App">
      <Header />
      <TaskInput onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskDisplay toDoList={toDoList} />
    </div>
  );
}

export default App;
