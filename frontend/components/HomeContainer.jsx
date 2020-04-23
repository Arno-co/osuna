import React from "react";
import Home from './Home';
import { connect } from 'react-redux';
import { fetchTeams } from "../actions/team_actions";
import { fetchProjects } from "../actions/project_actions";
import { fetchUsers } from "../actions/user_actions";
import { fetchTasks } from '../actions/task_actions';
import { openModal } from '../actions/modal_actions';
import { withRouter } from 'react-router-dom';



const mSTP = state => ({
    currentUser: state.session.currentUser,
    users: state.entities.users,
    teams: state.entities.teams,
    projects: Object.values(state.entities.projects),
    tasks: Object.values(state.entities.tasks),
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTeams: () => dispatch(fetchTeams()),
    fetchTeam: (teamId) => dispatch(fetchTeams(teamId)),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchTasks: () => dispatch(fetchTasks()),
    openModal: (type, id) => dispatch(openModal(type, id))
})

export default withRouter(connect(mSTP, mDTP)(Home));