import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import TaskDisplay from './components/taskDisplay/TaskDisplay';
import Header from './components/header/Header'

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);



  return (
    <div className="App">
      <Header />
      <TaskInput />
      <TaskDisplay />
    </div>
  );
}

export default App;
