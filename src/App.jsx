import React, { useState } from 'react'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {v4 as uuidv4} from 'uuid';

import './App.css'


const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Ebook",
      completed: true,
    },

  ]);


  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.i === taskId) return { ... task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  };


  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed:false,
    }];

    setTasks(newTasks);

  };

  return (
    <div>
        <div className="container">
         <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks = {tasks} handleTaskClick={handleTaskClick}/> 
        </div>;
    </div>


  );
  
}


export default App;