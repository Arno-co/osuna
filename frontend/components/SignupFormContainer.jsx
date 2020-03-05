import React from 'react'
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../actions/session_actions'
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../actions/modal_actions'

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'SIGN UP'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>SIGN IN</button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));