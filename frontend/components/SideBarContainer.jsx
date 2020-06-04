import React from "react";
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import SideBar from './SideBar';


const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
    users: Object.values(state.entities.users),
    teams: Object.values(state.entities.teams),
    projects: Object.values(state.entities.projects),
    tasks: Object.values(state.entities.tasks)
})

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapSTP, mapDTP)(SideBar);