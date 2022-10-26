import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import Header from "./components/header/Header";

function App() {
  const initalTodoList = [
    { text: "Complete online Javascript course", complete: true, id: 1 },
    { text: "Jog around the park 3x", complete: false, id: 2 },
    { text: "10 minutes meditation", complete: false, id: 3 },
    { text: "Read for 1 hour", complete: false, id: 4 },
    { text: "Pick up groceries", complete: false, id: 5 },
    { text: "Complete Todo App on Frontend Mentor", complete: false, id: 6 },
  ];
  let todoNumber;
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(() => {
    //checks to see if there is a todoList saved to local storage, if not returns empty array
    const savedTodoList = localStorage.getItem("todoList");
    if (JSON.stringify(savedTodoList) !== JSON.stringify(initalTodoList)) {
      return JSON.parse(savedTodoList);
    } else {
      return initalTodoList;
    }
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  //sets "todo" to value of input field.
  function onChange(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }

  //pushes new "todo" to the setTodoList array
  function handleClick(e) {
    e.preventDefault();

    //If a todoList is retrieved from local storage sets todoNumber to the next number so IDs are consecutive
    if (todoList.length > 0) {
      todoNumber = todoList.length;
    } else {
      todoNumber = 0;
    }

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
