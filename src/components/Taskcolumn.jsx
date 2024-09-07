import React from "react";
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";



const AppColumn =({title,icon,tasks,status,handleDelete}) => { 
  
  return(  
    <section className="app_Column">

      <h2 className="app_column_heading ">
     <img className ="app_column_icon" src = {icon} alt = ""/>{title}
     
      </h2>

      {
        tasks.map(
          (task,index) => 
            task.status === status && ( 
            <TaskCard 
          key ={index}
          title={task.task}
          tags = {task.tags}
          handleDelete={handleDelete}
          index = {index}
          
          />
        )
      
      )}
        
    </section>
    

      
    
  )
}


export default AppColumn 


