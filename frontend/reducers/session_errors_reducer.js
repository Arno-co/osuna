import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERRORS
} from '../actions/session_actions';


const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            if (action.errors) {
                nextState = action.errors
                return nextState
            } else {
                return null;
            };
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;