import React from 'react';
import TeamForm from './TeamForm';
// import SessionForm from '../SessionForm';
import { createTeam } from '../../actions/team_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    team: {
        name: '',
        description: '',
        projects: [],
        teammates: []
    }
})

const mDTP = dispatch => ({
    createTeam: team => dispatch(createTeam(team))
})

export default connect(mSTP, mDTP)(TeamForm);