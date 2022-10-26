import React from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import TaskDisplay from './components/taskDisplay/TaskDisplay';

function App() {
  return (
    <div className="App">
      <img src='./assets/bg-desktop-light.jpg'/>
      <TaskInput />
      <TaskDisplay />
    </div>
  );
}

export default App;
