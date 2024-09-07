import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from "./components/TaskForm";
import Tag from './components/Tag';
import AppColumn from './components/Taskcolumn';
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const[tasks,setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])
   
const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
     setTasks(newTasks)
  }

  return(
  
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
     
    <header className='app_header'></header>
     <main className='app_main'>
     <AppColumn 
     
     title="To do" 
     icon={todoIcon}
     tasks={tasks}
     status="todo" 
     handleDelete={handleDelete}
     />
     <AppColumn 
    
     title="Doing"
    icon={doingIcon}
     tasks={tasks}
     status="doing" 
      handleDelete={handleDelete}
     />
     <AppColumn 
    
     title="Done" 
     icon={doneIcon}
    tasks={tasks}
     status="done"
     handleDelete={handleDelete}
      /> 
    </main>

    </div>
  )
}

export default App
