import React from "react";
import Project from './Project';
import { connect } from 'react-redux';
import { fetchTeams } from "../../actions/team_actions";
import { fetchProject, fetchProjects } from "../../actions/project_actions";
import { fetchUsers } from "../../actions/user_actions";



const mSTP = state => ({
    currentUser: state.session.currentUser,
    users: state.entities.users,
    teams: state.entities.teams,
    projects: state.entities.projects
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTeams: () => dispatch(fetchTeams()),
    fetchTeam: (teamId) => dispatch(fetchTeams(teamId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    fetchProjects: ( ) => dispatch(fetchProjects( ))
})

export default connect(mSTP, mDTP)(Project);