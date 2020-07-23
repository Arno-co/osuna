import React from 'react';
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom';
 
class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            task: this.props.task,
            showDelete: false,
            showAssignee: false,
            assignee: null
        }

        this.toggleComplete = this.toggleComplete.bind(this);
        this.handleCloseForm = this.handleCloseForm.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteDropdown = this.handleDeleteDropdown.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.renderTaskTitle = this.renderTaskTitle.bind(this);
        this.renderTaskAssignee = this.renderTaskAssignee.bind(this);
        this.handleAssignee = this.handleAssignee.bind(this);
        this.handleAssigneeOptions = this.handleAssigneeOptions.bind(this);
        this.handleAssigneeDropdown = this.handleAssigneeDropdown.bind(this);
        this.changeAssignee = this.changeAssignee.bind(this);
        this.renderProject = this.renderProject.bind(this);
        this.debouncedUpdateTask = debounce(() => { this.props.updateTask(this.state.task) }, 500);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.task !== this.props.task) {
            this.setState({ task: this.props.task, assignee: this.props.users[this.props.task.assigneeId]})
        }
    }

    componentDidMount() {
        this.props.fetchUsers().then(() => {
            this.props.fetchTask(this.props.match.params.taskId)
        }).then(() => {
            this.setState({ assignee: this.props.users[this.props.task.assigneeId]})
        
        }, () => console.log('fail'));

    }

    update(field) {
        return e => {
            this.setState({ task: { id: this.state.task.id, [field]: e.currentTarget.value} },
             this.debouncedUpdateTask)
        }
    }

    toggleComplete(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.updateTask({ id: this.state.task.id, completed: !this.state.task.completed })
            .then((res) => { this.setState({ task: res.task}) });
    }

    handleCloseForm(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log(this.props)
        if (this.props.match.params.projectId) {
            this.props.history.push(`/projects/${this.props.match.params.projectId}`)
        } else if (this.props.match.params.userId){
            this.props.history.push(`/team/${this.props.match.params.userId}`)
        }
    }

    handleDeleteOption(e) {
        e.preventDefault()
        this.setState((state) => {
            return { showDelete: !state.showDelete };
        })
    }

    handleDeleteDropdown() {
        if (this.state.showDelete === true) {
            return(
                <div className='task-delete-container'>
                    <div className='task-delete-item' onClick={(e) => this.handleDeleteTask(e)}>Delete Task</div>
                </div>
            )
        } else {
            return null;
        }
    }

    handleDeleteTask(e) {
        this.props.deleteTask(this.state.task.id).then(() => this.props.fetchTasks());
        this.handleCloseForm(e)
    }

    handleAssignee(assignee) {
            let user = assignee;
            return (
                <div className='assignee-field-container'>
                    <div className='team-member' style={{ background: this.handleTeamColor(user.username) }}>{this.handleName(user.username)}
                    </div>
                    <div className='task-full-name'>
                        <div>{user.username}</div>
                    </div>
                </div>
            );
    }

    handleName(name) {
        let nameArray = name.split(' ');
        if (nameArray.length === 1) {
            return name.slice(0, 1).toUpperCase()
        } else {
            return nameArray[0].slice(0, 1).toUpperCase().concat(nameArray[nameArray.length - 1].slice(0, 1).toUpperCase())
        }
    }

    handleTeamColor(title) {
        const initial = title.slice(0, 1).toUpperCase();

        if (['A', 'B', 'C', 'D', 'E'].includes(initial)) {
            return '#4186e0'
        } else if (['G', 'H', 'I', 'J', 'K', 'L'].includes(initial)) {
            return '#e8384f'
        } else if (['M', 'N', 'O', 'P', 'Q'].includes(initial)) {
            return '#3ad580'
        } else if (['R', 'S', 'T', 'U'].includes(initial)) {
            return '#4186e0'
        } else if (['V', 'W', 'X', 'Y', 'Z'].includes(initial)) {
            return '#e8384f'
        } else {
            return '#eec300'
        }
    }

    handleProjectColor(title) {
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
    }

    handleAssigneeOptions(e) {
        e.preventDefault()
        this.setState((state) => {
            return { showAssignee: !state.showAssignee };
        })
    }

    changeAssignee(id) {
        
        this.props.updateTask({ id: this.state.task.id, assigneeId: id })
            .then((res) => { this.setState({ task: res.task }) });
    }

    handleAssigneeDropdown() {
        if (this.state.showAssignee === true) {
            return (
                <div className='task-users-dropdown'>
                    {
                        Object.values(this.props.users).map((user) => {
                            if (user.id !== this.state.assignee.id)
                            return (
                            <div 
                            className='task-users-item' 
                            key={user.id}
                            value={user.id} 
                            onClick={() => this.changeAssignee(user.id)}
                            >{this.handleAssignee(user)}</div>
                            )
                        })
                    }
                </div>
            )
        } else {
            return null;
        }
    }

    

    renderTaskTitle() {
            return (
                <div className='task-title-container'>
                    <textarea 
                    className='task-title' 
                    value={this.state.task.title} 
                    onChange={this.update('title')}
                    placeholder='Write a task name'></textarea>
                </div>
            )
    }

    renderTaskAssignee() {
        
        if (this.state.assignee) {
            return (
                <div className='task-assignee-container' onClick={this.handleAssigneeOptions}>
                    <div className='task-form-label'>
                        <div>Assignee</div>
                    </div>
                    <div className='task-form-field'>{this.handleAssignee(this.state.assignee)}</div>
                    {this.handleAssigneeDropdown()}
                </div>
            )
        }
    }

    renderProject() {
        if (this.props.project) {
            return (
                <Link to={`/projects/${this.props.project.id}`} key={this.props.project.id}>
                    <div className='mini-tile-container'>
                        <div className='mini-tile' style={{ background: this.handleProjectColor(this.props.project.title) }}></div>
                        <div>{this.props.project.title}</div>
                    </div>
                </Link>
            )
        } else {
            return null;
        }
    }

    renderDescription() {

        return (
            <div className='task-description-container'>
                <div className='task-form-label'>Description</div>
                {/* <div className='task-form-field'> */}
                    <textarea
                        className='task-description'
                        value={this.state.task.description}
                        onChange={this.update('description')}
                        placeholder='Add more details to this task'></textarea>
                {/* </div> */}
            </div>
        )
    }

    render() {
        if (this.state.task) {
            let checked;
            let completed;

            (!this.props.task.completed) ? checked = 'complete-task-button' : checked = 'complete-task-button-checked';
            (!this.props.task.completed) ? completed = 'MARK COMPLETE' : completed = 'COMPLETED';

            return (
                <div className='task-form'>
                    <div className='task-form-header'>
                        <div className='complete-task-button-container'>
                            <div onClick={(e) => this.toggleComplete(e)} className={checked}>
                                <span>
                                    <i className="fas fa-check fa-s" ></i>
                                </span>
                                {completed}
                            </div>
                        </div>
                        <div className='task-form-header-icons-container'>
                            <span className='etc-form-container' onClick={this.handleDeleteOption}>
                                <i className="fas fa-ellipsis-h fa-xs" ></i>
                            </span>
                            {this.handleDeleteDropdown()}
                            <span className='close-form-container' onClick={this.handleCloseForm}>
                                <i className="fas fa-times fa-s" ></i>
                            </span>
                        </div>
                    </div>
                    <div className='task-form-body'>
                        {this.renderTaskTitle()}
                        {this.renderTaskAssignee()}
                        <div className='task-start-date-container'>
                            <div className='task-form-label'>Start Date</div>
                                <input className='task-form-date' type="date" value={this.state.task.startDate} onChange={this.update('startDate')}></input>
                            <div className='task-form-field'></div>
                        </div>
                        <div className='task-end-date-container'>
                            <div className='task-form-label'>Due Date</div>
                                <input className='task-form-date' type="date" value={this.state.task.endDate} onChange={this.update('endDate')}></input>
                            <div className='task-form-field'></div>
                        </div>
                        <div className='task-project-container'>
                            <div className='task-form-label'>Project</div>
                            <div className='task-form-field'>
                            {this.renderProject()}    
                            </div>
                        </div>
                        {this.renderDescription()}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default TaskForm