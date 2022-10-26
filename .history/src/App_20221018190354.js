import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskDisplay from "./components/taskDisplay/TaskDisplay";
import Header from "./components/header/Header";

function App() {
  const [todo, setTodo] = useState({});
  const toDoList = [];

  function onChange(e){
    e.preventDefault();
    setTodo(e.target.value);
    console.log(e.target)
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
