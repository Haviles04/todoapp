import React from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import taskDisplay from './components/taskDisplay/taskDisplay';

function App() {
  return (
    <div className="App">
      <TaskInput />
      <taskDisplay />
    </div>
  );
}

export default App;
