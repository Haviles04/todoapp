import React from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import TaskDisplay from './components/taskDisplay/TaskDisplay';
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <TaskInput />
      <TaskDisplay />
    </div>
  );
}

export default App;
