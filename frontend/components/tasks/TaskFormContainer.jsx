import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { updateTask, fetchTask, deleteTask, fetchTasks } from '../../actions/task_actions';
import { fetchUsers } from '../../actions/user_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    task: state.entities.tasks[ownProps.match.params.taskId],
    projects: state.entities.projects,
    users: state.entities.users
})

const mDTP = (dispatch) => ({
    updateTask: (task) => dispatch(updateTask(task)),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    fetchTasks: () => dispatch(fetchTasks()),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    fetchUsers: () => dispatch(fetchUsers()) 
})

export default withRouter(connect(mSTP, mDTP)(TaskForm))