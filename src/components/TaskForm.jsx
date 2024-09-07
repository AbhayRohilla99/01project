import React from "react"
import { useState } from 'react'
import "./TaskForm.css";
import Tag from './Tag';


const taskForm = ({setTasks}) => {
    const[taskData,setTaskData] = useState({
        task:"",
        status:"todo",
        tags:[]
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item =>item === tag )
    }
    const selectTag = (tag) => {
       if(taskData.tags.some(item => item === tag)){
      const filterTags= taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
       return{...prev, tags: filterTags}
      });
       }
       else{ 
        setTaskData(prev => {
            return{...prev,tags:[...prev.tags,tag] };
        })
       }
    }
    
 
    const handleChange = (e) => {
        const {name,value} = e.target;

        setTaskData((prev) => {
            return{ ...prev,[name]: value};
        });
    };
      
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData)
        setTasks(prev => {
            return [...prev,taskData]
        })
        setTaskData({
            task:"",
            status:"todo",
            tags:[],
        });
    };
    
    
    return(
       <header className='app_header'>
           
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="task"
        value={taskData.task}
        className='app_input'
        placeholder='Enter Your Task'
         onChange={handleChange}
            />
           
          <div className='app_form_bottom_line'>
            <div>
           <Tag tagName = "HTML" selectTag = {selectTag}
            selected={checkTag("HTML")}/>
           <Tag tagName = "CSS" selectTag = {selectTag} 
           selected={checkTag("CSS")}/>
           <Tag tagName = "Javascript" selectTag = {selectTag}
            selected={checkTag("Javascript")}/>
           <Tag tagName = "React" selectTag = {selectTag}
            selected={checkTag("React")}/>

          </div>
          <div>
            <select
            name="status"
            value={taskData.status} 
            className='app_status'
            onChange={handleChange}>
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
            </select>
            <button type="submit"
             className='app_submit'>
                   + Add Task
                </button>
                </div>
         </div>
        </form>
        </header>
    )
}

export default taskForm
