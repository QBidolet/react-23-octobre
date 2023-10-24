import React, {Component} from "react";
import Task from './Task';

class TaskList extends Component {
    render() {
        const { tasks } = this.props;
        return(
            <div>
            <ul>
                {
                 tasks.map(
                    (task, index) => 
                    <Task key={index} index={index} 
                    task={task} 
                    deleteTask={this.props.deleteTask}
                    toggleTask={this.props.toggleTask}
                    />           
                    )
                }
                </ul>
            </div>
        )
    }
}

export default TaskList;