import React from 'react';
import JoinTeamForm from './JoinTeamForm';
import { fetchTeams } from '../../actions/team_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    teams: Object.values(state.teams)
})

const mDTP = dispatch => ({
    fetchTeams: () => dispatch(fetchTeams()),
    deleteTeam: (teamId) => dispatch(deleteTeam(teamId))
})

export default connect(mSTP, mDTP)(JoinTeamForm)