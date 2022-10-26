import React from 'react';
import { useState } from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import TaskDisplay from './components/taskDisplay/TaskDisplay';
import Header from './components/header/Header'


function App() {
  const [todo, setTodo] = React.useState("");


 function handleClick(e) {
  e.preventDefault()

  const newTodo = {
    text: todo,
    complete: false
  }
 }


  return (
    <div className="App">
      <Header />
      <TaskInput handleClick={handleClick} todo={todo}/>
      <TaskDisplay />
    </div>
  );
}

export default App;
