import React from "react";
import { fetchTeams } from "../actions/team_actions";


const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    team: state.entities.teams[state.entities.users[state.session.currentUserId].teamId],
})

const mDTP = dispatch => ({
fetchTeams: () => dispatch(fetchTeams())

})

export default connect(mSTP, mDTP)(Home);