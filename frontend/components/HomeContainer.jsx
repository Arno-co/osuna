import React from "react";
import Home from './Home';
import { connect } from 'react-redux';
import { fetchTeams } from "../actions/team_actions";
import { fetchProjects } from "../actions/project_actions";
import { fetchUsers } from "../actions/user_actions";



const mSTP = state => ({
    currentUser: state.session.currentUser,
    users: state.entities.users,
    teams: state.entities.teams,
    projects: Object.values(state.entities.projects)
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTeams: () => dispatch(fetchTeams()),
    fetchTeam: (teamId) => dispatch(fetchTeams(teamId)),
    fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mSTP, mDTP)(Home);