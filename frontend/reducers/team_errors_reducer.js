import {
    RECEIVE_TEAM,
    RECEIVE_TEAM_ERRORS,
    CLEAR_ERRORS
} from '../actions/team_actions';


const teamErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TEAM_ERRORS:
            debugger
            if (action.errors) {
                nextState = action.errors
                return nextState
            } else {
                return null;
            };
        case RECEIVE_TEAM:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default teamErrorsReducer;