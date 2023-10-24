import React, {Component} from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }

    addTask = (task) =>{
        // Pas de push car React ne verra pas les modifications.
        // this.state.tasks.push(task);
        this.setState({tasks: [...this.state.tasks, task] });
    }

    deleteTask = (index) => {
        const updatedTasks = this.state.tasks.filter((task, i) => i !== index);
        this.setState({tasks: updatedTasks});
    }

    toggleTask = (index) => {
        const updatedTasks = this.state.tasks.map((task, i) => {
            if(i === index){
                task.completed = !task.completed;
            }
            return task;
        })
        this.setState({tasks: updatedTasks});
    }
    

    render() {
        return(
            <div>
                <TaskForm addTask={this.addTask}/>
                <TaskList tasks={this.state.tasks}
                deleteTask={this.deleteTask} 
                toggleTask={this.toggleTask}/>
            </div>
        )
    }
}

export default Todo;