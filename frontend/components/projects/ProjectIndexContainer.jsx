import React from 'react';
import { connect } from 'react-redux';
import ProjectIndex from './ProjectIndex'
import { fetchProjects, deleteProject } from '../../actions/project_actions';


const mSTP = state => ({
    projects: Object.values(state.projects)
})

const mDTP = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: (projectId) => dispatch(deleteProject(projectId))
})

export default connect(mSTP, mDTP)(ProjectIndex)

