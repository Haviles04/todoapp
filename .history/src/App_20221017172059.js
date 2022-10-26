import React from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import TaskDisplay from './components/taskDisplay/taskDisplay';

function App() {
  return (
    <div className="App">
      <TaskInput />
      <TaskDisplay />
    </div>
  );
}

export default App;
