import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { createProject, clearErrors } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
    project: {
        title: '',
        description: '',
        projectOwnerId: state.session.currentUser.id,
        startDate: '',
        endDate: ''
    },
    errors: state.errors.projects,
    formType: 'CREATE A PROJECT'
})

const mDTP = dispatch => ({
    processForm: project => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(ProjectForm));