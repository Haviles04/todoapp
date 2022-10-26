import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import Header from "./components/header/Header";

const toDoList = [];
let todoNumber = 0;

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
      Key: todoNumber += 1
    };

    setTodo("");
    toDoList.push(newTodo);
    document.getElementById('taskInput').value = "";

  }

  function setCompleted (todo, toDoList){
    
    toDoList.map( (task) => { if task.key = {todo.key} {
    
    if(!todo.complete){
      todo.complete = true;
    }
  }
}
  
    


  return (
    <div className="App">
      <Header />
      <TaskForm onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskList toDoList={toDoList} setCompleted={setCompleted} />
    </div>
  );
}

export default App;
