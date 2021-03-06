import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import teamsReducer from "./teams_reducer"
import projectsReducer from "./projects_reducer";
import tasksReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    teams: teamsReducer,
    projects: projectsReducer,
    tasks: tasksReducer
});

export default entitiesReducer;