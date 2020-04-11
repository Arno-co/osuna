import * as ProjectApiUtil from '../util/project_api_util'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

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

export const fetchProjects = () => dispatch => {
    return ProjectApiUtil.fetchProjects()
    .then((projects) => dispatch(receiveProjects(projects)))
}

export const fetchProject = (projectId) => dispatch => {
    return ProjectApiUtil.fetchProject(projectId)
    .then((project) => dispatch(receiveProject(project)))
}

export const createProject = (project) => dispatch => {
    return ProjectApiUtil.createProject(project)
    .then((project) => dispatch(receiveProject(project)))
}

export const updateProject = (project) => dispatch => {
    return ProjectApiUtil.updateProject(project)
    .then((project) => dispatch(receiveProject(project)))
}

export const deleteProject = (projectId) => dispatch => {
    return ProjectApiUtil.deleteProject(projectId)
    .then((projectId) => dispatch(removeProject(projectId)))
}