import React from 'react';
import { Link } from 'react-router-dom';

const TasksList = (props) => {
    const { tasks, currentUser } = props;

    // const handleDueDate = (date)=> {
    //     let today = Date.now()
    //     let parsedDate = Date.parse(date)

    //     if (parsedDate < today) {
    //         return 'red'
    //     } else {
    //         return 'white'
    //     }
    // }

    const handleTaskColor = (task) => {
        let today = Date.now()
        let parsedDate = Date.parse(task.endDate)
        if (task.completed) {
            return '#25e8c8'
        } else if (parsedDate < today) {
            return 'red'
        } else {
            return "white"
        }
    }
 
    return (
        <div>{
            tasks.map((task) => {
                if (task.assigneeId === currentUser.id) {
                    return (
                        <Link to={`/projects/${task.projectId}/${task.id}`} key={task.id}>
                            <div className='mini-tile-container'>
                                <div className='mini-tile' style={{ background: handleTaskColor(task) }}></div>
                                <div className='mini-tile-container-text'>{task.title}</div>
                            </div>
                        </Link>
                    )
                }
            })
        }</div>
    )
}

export default TasksList;