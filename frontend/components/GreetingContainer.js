import React from "react";
import { signup, login, logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import {fetchTeam} from '../actions/team_actions';
import Greeting from './Greeting';

const mapSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    team:{}
})

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchTeam: teamId => dispatch(fetchTeam(teamId))
})

export default connect(mapSTP, mapDTP)(Greeting);