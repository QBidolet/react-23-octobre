import React, { Component } from 'react';

class Task extends Component {
    render(){
        const {task, index, deleteTask, toggleTask} = this.props;
        return (
            <li onClick={()=>toggleTask(index)} 
            style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
            {task.text}
            <button onClick={(event)=>{
                event.stopPropagation();
                deleteTask(index)
                }}>Supprimer</button>
            </li>
        )
    }
}

export default Task;