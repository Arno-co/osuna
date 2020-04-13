import {
    RECEIVE_CURRENT_USER,
    REMOVE_SESSION
} from '../actions/session_actions';

const sessionReducer = (oldState = { currentUser: null }, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.currentUser = action.currentUser;
            return nextState;
        case REMOVE_SESSION:
            nextState.currentUser = null;
            return nextState;
        default:
            return oldState;
    }
}

export default sessionReducer;