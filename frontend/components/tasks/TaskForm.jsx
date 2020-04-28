import React from 'react';
import debounce from 'lodash/debounce'

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)

        this.state = {
            task: this.props.task,
            showDelete: false
        }
        console.log(this.state)
        this.toggleComplete = this.toggleComplete.bind(this);
        this.handleCloseForm = this.handleCloseForm.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteDropdown = this.handleDeleteDropdown.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.renderTaskTitle = this.renderTaskTitle.bind(this);
        this.renderTaskAssignee = this.renderTaskAssignee.bind(this);
        this.handleAssignee = this.handleAssignee.bind(this);
        this.debouncedUpdateTask = debounce(() => { this.props.updateTask(this.state.task) }, 500);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.task !== this.props.task) {
            this.setState({ task: this.props.task})
        }
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
        this.props.history.push(`/projects/${this.props.match.params.projectId}`)
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
        this.props.deleteTask(this.state.task.id)
        this.handleCloseForm(e)
    }

    handleAssignee(id) {
        
        if (this.props.users[id]) {
            let user = this.props.users[id];
            return (
                <div className='assignee-field-container'>
                    <div className='team-member' style={{ background: this.handleColor(user.username) }}>{this.handleName(user.username)}
                    </div>
                    <div className='full-name'>
                        <div>{user.username}</div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    handleName(name) {
        let nameArray = name.split(' ');
        if (nameArray.length === 1) {
            return name.slice(0, 1).toUpperCase()
        } else {
            return nameArray[0].slice(0, 1).toUpperCase().concat(nameArray[nameArray.length - 1].slice(0, 1).toUpperCase())
        }
    }

    handleColor(title) {
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
        
        return(
            <div className='task-assignee-container'>
                <div className='task-form-label'>
                    <div>Assignee</div>
                </div>
                <div className='task-form-field'>{this.handleAssignee(this.state.task.assigneeId)}</div>
            </div>
        )
    }

    render() {
        console.log(this.state)
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
                            <div className='task-form-field'></div>
                        </div>
                        <div className='task-end-date-container'>
                            <div className='task-form-label'>Due Date</div>
                            <div className='task-form-field'></div>
                        </div>
                        <div className='task-project-container'>
                            <div className='task-form-label'>Project</div>
                            <div className='task-form-field'></div>
                        </div>
                        <div className='task-description-container'>
                            <div className='task-form-label'>Description</div>
                            <div className='task-form-field'></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default TaskForm