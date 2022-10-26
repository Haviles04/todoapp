import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import Header from "./components/header/Header";

let todoNumber = 0;

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  //sets "todo" as whatever value of input field is.
  function onChange(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }

  //pushes new "todo" to the setTodoList array
  function handleClick(e) {
   
    e.preventDefault();

    const newTodo = {
      text: todo,
      complete: false,
      id: (todoNumber += 1),
    };

    setTodo("");
    setTodoList([...todoList].concat(newTodo));
    document.getElementById("taskInput").value = "";
  }

  return (
    <div className="App">
      <Header />
      <TaskForm onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
