import React, {useState} from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import TaskDisplay from './components/taskDisplay/TaskDisplay';
import Header from './components/header/Header'


function App() {
  const [todo, setTodo] = React.useState("");
  const toDoList = [];

 function handleClick(e) {
  e.preventDefault()

  

  const newTodo = {
    text: todo,
    complete: false
  }

  return newTodo;

 }

 toDoList.push(newTodo);




  return (
    <div className="App">
      <Header />
      <TaskInput handleClick={handleClick} todo={todo}/>
      <TaskDisplay />
    </div>
  );
}

export default App;
