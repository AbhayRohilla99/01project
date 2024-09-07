 import React from "react" 
 import "./TaskCard.css"
  import Tag from "./Tag"
  import deleteIcon from "../assets/delete.png"


  const TaskCard = ({title,tags,handleDelete,index}) => {
    return(

<article className="app_card">
<p className="app_text">{title}</p>
<div className="app_card_bottom_line">
<div className="app_card_tags">
   {
    tags.map((tag,index) => (
    <Tag key={index} tagName={tag} selected/>
    ))}
   
</div>
<div className="app_delete"
onClick={() => handleDelete(index)}
> 
  <img src={deleteIcon} className="delete_icon" alt=""/>    
</div>

</div>

</article>
    )
  }
  export default TaskCard


  