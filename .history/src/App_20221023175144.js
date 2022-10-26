import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import Header from "./components/header/Header";
import OptionsFooter from "../optionsFooter/OptionsFooter";
import TaskItem from "../taskItem/TaskItem";

let todoNumber = 0;

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [listType, setListType] = useState([...todoList]);

  //sets "todo" as whatever value of input field is.
  function onChange(e) {
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

  function clearComplete() {
    let activeArray = [...todoList].filter((todo) => !todo.complete);
    setTodoList(activeArray);
  }

  let allList = [...todoList];
  let completedList = [...todoList].filter((todo) => todo.complete);
  let activeList = [...todoList].filter((todo) => !todo.complete);

  return (
    <div className="App">
      <Header />
      <TaskForm onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskList setTodoList={setTodoList} todoList={todoList}  />
      <OptionsFooter
        setListType={setListType}
        allList={allList}
        completedList={completedList}
        activeList={activeList}
        clearComplete={clearComplete}
      />
    </div>
  );
}

export default App;
