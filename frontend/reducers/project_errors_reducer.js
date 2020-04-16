import {
    RECEIVE_PROJECT,
    RECEIVE_ERRORS,
    CLEAR_ERRORS
} from '../actions/project_actions';


const projectErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ERRORS:
            if (action.errors) {
                return action.errors
            } else {
                return null;
            };
        case RECEIVE_PROJECT:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default projectErrorsReducer;