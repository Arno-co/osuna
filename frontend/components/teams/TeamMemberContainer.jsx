import React from "react";
import TeamMember from './TeamMember';
import { connect } from 'react-redux';
import { fetchTeams } from "../../actions/team_actions";
import { fetchProject, fetchProjects } from "../../actions/project_actions";
import { fetchUsers } from "../../actions/user_actions";
import { openModal } from '../../actions/modal_actions';
import { fetchTasks, createTask, updateTask } from '../../actions/task_actions';
import { withRouter } from 'react-router-dom';




const mSTP = state => ({
    currentUser: state.session.currentUser,
    users: state.entities.users,
    teams: state.entities.teams,
    projects: state.entities.projects,
    tasks: Object.values(state.entities.tasks)
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTeams: () => dispatch(fetchTeams()),
    fetchTeam: (teamId) => dispatch(fetchTeams(teamId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchTasks: () => dispatch(fetchTasks()),
    createTask: (task) => dispatch(createTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(TeamMember));