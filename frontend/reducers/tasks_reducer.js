import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';


const tasksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_TASKS:
            return action.tasks;
        case RECEIVE_TASK:
            nextState[action.task.id] = action.task;
            return nextState;
        case REMOVE_TASK:
            delete nextState[action.taskId];
            return nextState;
        default:
            return oldState;
    }
}

export default tasksReducer;