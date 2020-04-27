import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)

        this.state = this.props.task

        this.toggleComplete = this.toggleComplete.bind(this)
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

    render() {

        if (this.props.task) {
            let checked;

            (!this.state.completed) ? checked = 'complete-task-button' : checked = 'complete-task-button-checked'

            return (
                <div className='task-form'>
                    <div className='task-form-header'>
                        <div className='complete-task-button-container'>
                            <div onClick={(e) => this.toggleComplete(e)} className={checked}>
                                <span>
                                    <i className="fas fa-check fa-s" ></i>
                                </span>
                            MARK COMPLETE</div>
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