import {
    RECEIVE_PROJECT,
    RECEIVE_PROJECT_ERRORS,
    CLEAR_ERRORS
} from '../actions/project_actions';


const projectErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    console.log(action)
    switch (action.type) {
        case RECEIVE_PROJECT_ERRORS:
            if (action.errors) {
                nextState = action.errors
                return nextState
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