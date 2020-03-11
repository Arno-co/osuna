import React from 'react';
import TeamForm from './TeamForm';
// import SessionForm from '../SessionForm';
import { createTeam } from '../../actions/team_actions';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    team: {
        name: '',
        description: '',
        projects: [],
        teammates: []
    },
    errors: state.errors.team
})

const mDTP = dispatch => ({
    createTeam: team => dispatch(createTeam(team)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),

})

export default connect(mSTP, mDTP)(TeamForm);