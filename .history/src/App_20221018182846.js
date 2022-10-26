import React, { Component, useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskDisplay from "./components/taskDisplay/TaskDisplay";
import Header from "./components/header/Header";

class App extends Component {
  const [todo, setTodo] = useState({});
  const toDoList = [];

  

  function handleClick(e) {
    e.preventDefault();

    const newTodo = {
      text: todo,
      complete: false,
    };

    setTodo(newTodo);

    toDoList.push(newTodo);
  }
  


  return (
    <div className="App">
      <Header />
      <TaskInput handleClick={handleClick} todo={todo} />
      <TaskDisplay toDoList={toDoList} />
    </div>
  );
}

export default App;
