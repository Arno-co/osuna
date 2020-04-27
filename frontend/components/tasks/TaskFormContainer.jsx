import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { updateTask, fetchTask } from '../../actions/task_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    task: state.entities.tasks[ownProps.match.params.taskId],
    project: state.entities.projects[ownProps.match.params.projectId],
    users: state.entities.users
})

const mDTP = (dispatch) => ({
    updateTask: (task) => dispatch(updateTask(task)),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)) 
})

export default withRouter(connect(mSTP, mDTP)(TaskForm))