import React from 'react'
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup, clearErrors, login } from '../actions/session_actions';
import { createTeam, fetchTeams } from '../actions/team_actions'
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'SIGN UP'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    loginForm: user => dispatch(login(user)),
    createTeam: team => dispatch(createTeam(team)),
    joinTeam: () => dispatch(fetchTeams()),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>LOG IN</button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));