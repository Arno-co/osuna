import React from "react";
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import SideBar from './SideBar';

const mapSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapSTP, mapDTP)(SideBar);