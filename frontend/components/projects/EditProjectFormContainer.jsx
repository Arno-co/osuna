import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { updateProject, clearErrors } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
    project: state.entities.projects[state.ui.modal.id],
    errors: state.errors.projects,
    formType: 'EDIT YOUR PROJECT'
})

const mDTP = dispatch => ({
    processForm: project => dispatch(updateProject(project)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(ProjectForm));