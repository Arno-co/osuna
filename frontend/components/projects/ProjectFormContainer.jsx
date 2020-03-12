import React from 'react';
import ProjectForm from './ProjectForm';
import { createProject } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    project: {
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        teams: []
    },
    errors: state.errors.project
})

const mDTP = dispatch => ({
    createProject: project => dispatch(createProject(project)),

})

export default connect(mSTP, mDTP)(ProjectForm);