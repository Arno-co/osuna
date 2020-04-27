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
                        <div className='task-assignee-container'></div>
                        <div className='task-date-container'></div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default TaskForm