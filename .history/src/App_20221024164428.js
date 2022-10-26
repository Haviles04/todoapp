import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import Header from "./components/header/Header";



function App() {  
  let todoNumber;
  
  const [todo, setTodo] = useState("");
  
  
  const [todoList, setTodoList] = useState(() => {
    //checks to see if there is a todoList saved to local storage, if not returns empty array
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      return JSON.parse(savedTodoList);
    } else {
      return [];
    }
  });


  //sets "todo" as whatever value of input field is.
  function onChange(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }
  
  
  //pushes new "todo" to the setTodoList array
  function handleClick(e) {
    e.preventDefault();

    if(todoList.length > 0){
      todoNumber = todoList.length +=1;
    } else{
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

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);


  return (
    <div className="App">
      <Header />
      <TaskForm onChange={onChange} handleClick={handleClick} todo={todo} />
      <TaskList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
