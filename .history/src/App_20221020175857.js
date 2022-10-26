import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import Header from "./components/header/Header";


let todoNumber = 0;

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState [];
  

  function onChange(e){
    setTodo(e.target.value);
  }
  
  function handleClick(e) {
    
    e.preventDefault();

    const newTodo = {
      text: todo,
      complete: false,
      Key: todoNumber += 1
    };

    setTodo("");
    setTodoList(newTodo);
    document.getElementById('taskInput').value = "";

  }

 


  return (
    <div className="App">
      <Header />
      <TaskForm onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskList toDoList={toDoList} />
    </div>
  );
}

export default App;
