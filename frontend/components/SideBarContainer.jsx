import React from "react";
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import SideBar from './SideBar';


const mapSTP = (state, ownProp) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    team: state.entities.teams[state.entities.users[state.session.currentUserId].teamId],
    ownProp: ownProp,
    teams: state.entities.teams,
    currentState: state

})

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapSTP, mapDTP)(SideBar);