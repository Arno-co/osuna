import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import teamErrorsReducer from './team_errors_reducer';
import projectErrorsReducer from './project_errors_reducer';
import taskErrorsReducer from './tasks_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    team: teamErrorsReducer,
    project: projectErrorsReducer,
    task: taskErrorsReducer
});

export default errorsReducer;