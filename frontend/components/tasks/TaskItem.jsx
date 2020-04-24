import React from 'react';
import { withRouter } from 'react-router-dom';


class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.task
        
        this.toggleComplete = this.toggleComplete.bind(this);
        this.handleDueDate = this.handleDueDate.bind(this);

    }

    // componentDidMount(){
    //     this.handleDueDate(this.props.task.endDate);
    // }
    componentDidUpdate(prevProps) {
        if (prevProps.task !== this.props.task) {
            this.setState(this.props.task)
        }
    }

    handleAssignee(id) {
        let user = this.props.users[id];
        if (this.props.users[id]) {
            return (
                <div className='task-table-cell-assignee'>
                    <div className='team-member' style={{ background: this.handleColor(user.username) }}>{this.handleName(user.username)}
                        <div className='team-member-hover' style={{ background: this.handleColor(user.username) }}>
                            <div>{user.username}</div>
                            <br />
                            <div>{this.props.teams.length ? this.props.teams[0].name : null}</div>
                        </div>
                    </div>
                    <div>{user.username}</div>
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

    
    toggleComplete(e) {
    
        e.preventDefault();
        e.stopPropagation();
        this.props.updateTask({ id: this.state.id, completed: !this.state.completed })
        .then((res) => {this.setState(res.task)});
        
    }

    handleDueDate(date) {
        
        let today = this.props.formatDate();
       
        if (date > today) {
            
            return(
                <div className='task-table-cell-end-date'>{this.props.task.endDate}</div>
            )
        } else {
        
            return(
                <div className='task-table-cell-end-date-past-due'>{this.props.task.endDate}</div>
            )
        }
    }

    render() {
        let checked;


        (!this.state.completed) ? checked = 'complete-icon-container' : checked ='complete-icon-container-checked'

        return (
            <div className='tasks-table-row' key={this.props.task.id}>
                <div className='task-table-cell-task'>
                    <span onClick={(e) => this.toggleComplete(e)} className={checked}>
                        <i className="fas fa-check fa-s" ></i>
                    </span>
                    <div>{this.props.task.title}</div>
                </div>
                {this.handleAssignee(this.props.task.assigneeId)}
                <div className='task-table-cell-start-date'>{this.props.task.startDate}</div>
                {this.handleDueDate(this.props.task.endDate)}
            </div>
        )
    }
}

export default withRouter(TaskItem)