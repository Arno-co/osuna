import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)

        this.state = this.props.task

        this.toggleComplete = this.toggleComplete.bind(this);
        this.handleCloseForm = this.handleCloseForm.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.task !== this.props.task) {
            this.setState(this.props.task)
        }
    }

    toggleComplete(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.updateTask({ id: this.state.id, completed: !this.state.completed })
            .then((res) => { this.setState(res.task) });
    }

    handleCloseForm(e) {
        e.preventDefault();
        e.stopPropagation();
       
        this.props.history.push(`/projects/${this.props.match.params.projectId}`)
    }

    render() {

        if (this.props.task) {
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
                            <span className='etc-form-container' onClick={this.handleProjectMenu}>
                                <i className="fas fa-ellipsis-h fa-xs" ></i>
                            </span>
                            <span className='close-form-container' onClick={this.handleCloseForm}>
                                <i className="fas fa-times fa-s" ></i>
                            </span>
                        </div>
                    </div>
                    <div className='task-form-body'>

                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default TaskForm