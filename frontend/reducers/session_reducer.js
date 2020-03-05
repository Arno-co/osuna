import {
    RECEIVE_CURRENT_USER,
    REMOVE_SESSION
} from '../actions/session_actions';

const sessionReducer = (oldState = { currentUserId: null }, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.currentUserId = action.currentUser.id;
            return nextState;
        case REMOVE_SESSION:
            nextState.currentUserId = null;
            return nextState;
        default:
            return oldState;
    }
}

export default sessionReducer;