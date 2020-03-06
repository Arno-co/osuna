import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login, clearErrors } from '../actions/session_actions'
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../actions/modal_actions'

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'LOG IN'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    loginForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>SIGN UP</button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));