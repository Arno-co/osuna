import {
    RECEIVE_TASK,
    RECEIVE_TASK_ERRORS,
    CLEAR_ERRORS
} from '../actions/task_actions';


const taskErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TASK_ERRORS:
            if (action.errors) {
                nextState = action.errors
                return nextState
            } else {
                return null;
            };
        case RECEIVE_TASK:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default taskErrorsReducer;