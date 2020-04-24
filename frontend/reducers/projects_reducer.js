import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions'


const projectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            nextState[action.project.id] = action.project;
            return nextState;
        case REMOVE_PROJECT:
            delete nextState[action.projectId];
            return nextState;
        default:
            return oldState;
    }
}

export default projectsReducer;