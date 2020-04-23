import React from 'react';
import SideBarContainer from '../SideBarContainer';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                id: this.props.match.params.projectId
            }
        }
        console.log(this.props);
        this.handleTasksIndex = this.handleTasksIndex.bind(this);
    }

    componentDidMount() {
        const projectIdNumber = this.props.match.params.projectId;

        this.props.fetchUsers();
        this.props.fetchTeams();
        this.props.fetchTasks();
        this.props.fetchProjects().then(() => (this.setState({ project: this.props.projects[projectIdNumber] })))
        
        
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.projectId !== prevProps.match.params.projectId) {
            const projectIdNumber = this.props.match.params.projectId;

            this.props.fetchUsers();
            this.props.fetchTeams();
            this.props.fetchTasks();
            this.props.fetchProjects().then(() => (this.setState({ project: this.props.projects[projectIdNumber] })))
        }
    }

    handleColor(title) {

        if (title) {
            const initial = title.slice(0, 1).toUpperCase();
    
            if (['A', 'B', 'C', 'D', 'E'].includes(initial)) {
                return '#e8384f'
            } else if (['G', 'H', 'I', 'J', 'K', 'L'].includes(initial)) {
                return '#eec300'
            } else if (['M', 'N', 'O', 'P', 'Q'].includes(initial)) {
                return '#4186e0'
            } else if (['R', 'S', 'T', 'U'].includes(initial)) {
                return '#ea4e9d'
            } else if (['V', 'W', 'X', 'Y', 'Z'].includes(initial)) {
                return '#7a6ff0'
            } else {
                return '#aa62e3'
            }
        } else {
            return null;
        }
    }

    handleTasksIndex() {
        if (this.props.tasks) {
            
            let tasks = this.props.tasks.filter(task => task.projectId === this.state.project.id)

            return (
                    tasks.map((task) => {
                        return (
                            <div className='tasks-table-row' key={task.id}>
                                <div className='task-table-cell-completed'>{task.completed}</div>
                                <div className='task-table-cell-task'>{task.title}</div>
                                <div className='task-table-cell-assignee'>Assignee</div>
                                <div className='task-table-cell-start-date'>{task.startDate}</div>
                                <div className='task-table-cell-end-date'>{task.endDate}</div>
                            </div>
                        )
                    })
            )
        } else {
            return null;
        }
    }

    render() {
     
        if (this.props.users) {
            return (
                <div className='project-page'>
                    <SideBarContainer />
                    <div className='project-main'>
                        <div className='project-header-container'>
                            <div className='project-title-container'>
                                <div className='project-mini-tile-container' style={{ background: this.handleColor(this.state.project.title) }}>
                                    <span className='project-mini-tile'>
                                        <i className="fas fa-list fa-2x" ></i>
                                    </span>
                                </div>
                                <h1>{this.state.project.title}</h1>
                            </div>
                            <div className='project-owner'>{this.props.users[this.state.project.projectOwnerId] ? this.props.users[this.state.project.projectOwnerId].username : null}</div>
                            <div className='project-description'>{this.state.project.description}</div>
                        </div>
                        <div className='project-body-container'>
                            <div className='tasks-index-container'>
                                <div className='tasks-table'>
                                    <div className='tasks-table-row-top'>
                                        <div className='task-table-cell-completed'></div>
                                        <div className='task-table-cell-task'>Task</div>
                                        <div className='task-table-cell-assignee'>Assignee</div>
                                        <div className='task-table-cell-start-date'>Start Date</div>
                                        <div className='task-table-cell-end-date'>Due Date</div>
                                    </div>
                                    {this.handleTasksIndex()}
                                    <div className='tasks-table-row'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }


}

export default Project