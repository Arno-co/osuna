import * as ProjectApiUtil from '../util/project_api_util'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveProjects = (projects) => ({
    type: RECEIVE_PROJECTS,
    projects: projects
})

const receiveProject = (project) => ({
    type: RECEIVE_PROJECT,
    project: project
})

const removeProject = (projectId) => ({
    type: REMOVE_PROJECT,
    projectId: projectId
}) 

const receiveErrors = (errors) => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors: errors
})

export const fetchProjects = () => dispatch => {
    return ProjectApiUtil.fetchProjects()
    .then((projects) => dispatch(receiveProjects(projects)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const fetchProject = (projectId) => dispatch => {
    return ProjectApiUtil.fetchProject(projectId)
    .then((project) => dispatch(receiveProject(project)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const createProject = (project) => dispatch => {
    return ProjectApiUtil.createProject(project)
    .then((project) => dispatch(receiveProject(project)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const updateProject = (project) => dispatch => {
    return ProjectApiUtil.updateProject(project)
    .then((project) => dispatch(receiveProject(project)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const deleteProject = (projectId) => dispatch => {
    return ProjectApiUtil.deleteProject(projectId)
    .then((projectId) => dispatch(removeProject(projectId)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 