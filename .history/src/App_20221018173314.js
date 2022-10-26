import React from 'react';
import './App.css';
import TaskInput from './components/taskInput/TaskInput'
import TaskDisplay from './components/taskDisplay/TaskDisplay';
import Header from './components/header/Header'


function App() {
  const [todo, setTodo] = React.useState("");


  const handleClick = (e) =>{
    e.preventDefault();
    setTodo(e);
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
