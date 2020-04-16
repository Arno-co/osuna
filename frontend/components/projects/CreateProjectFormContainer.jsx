import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { createProject, clearErrors } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
    errors: state.errors.projects,
    formType: 'ADD A PROJECT'
})

const mDTP = dispatch => ({
    processForm: project => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(ProjectForm);