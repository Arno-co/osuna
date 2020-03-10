import { RECEIVE_TEAMS, RECEIVE_TEAM, REMOVE_TEAM } from '../actions/team_actions'


const teamsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_TEAMS:
            return action.teams;
        case RECEIVE_TEAM:
            nextState[action.team.id] = action.team;
            return nextState;
        case REMOVE_TEAM:
            delete nextState[action.teamId];
            return nextState;
        default:
            return oldState;
    }
}

export default teamsReducer;