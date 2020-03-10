import React from 'react';
import { connect } from 'react-redux';
import TeamIndex from './TeamIndex';
import { fetchTeams, deleteTeam } from '../../actions/team_actions';
import { fetchTeam } from '../../util/team_api_util';


const mSTP = state => ({
    teams: Object.values(state.teams)
})

const mDTP = dispatch => ({
    fetchTeams: () => dispatch(fetchTeams()),
    deleteTeam: (teamId) => dispatch(deleteTeam(teamId))
})

export default connect(mSTP, mDTP)(TeamIndex)