import React from 'react';
import { connect } from 'react-redux';
import { deleteProject, clearErrors } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import DeleteProjectForm from './DeleteProjectForm';


const mSTP = (state) => ({
    project: state.entities.projects[state.ui.modal.id],
    errors: state.errors.projects,
})

const mDTP = dispatch => ({
    processForm: projectId => dispatch(deleteProject(projectId)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(DeleteProjectForm));