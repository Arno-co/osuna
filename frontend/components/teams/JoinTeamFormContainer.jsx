import React from 'react';
import JoinTeamForm from './JoinTeamForm';
import { fetchTeams } from '../../actions/team_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    teams: Object.values(state.entities.teams),
    errors: state.errors.teams
})

const mDTP = dispatch => ({
    fetchTeams: () => dispatch(fetchTeams()),
    deleteTeam: (teamId) => dispatch(deleteTeam(teamId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(JoinTeamForm)