import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveTasks = (tasks) => ({
    type: RECEIVE_TASKS,
    tasks: tasks
})

const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task: task
})

const removeTask = (taskId) => ({
    type: REMOVE_TASK,
    taskId: taskId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_TASK_ERRORS,
    errors: errors
})

export const fetchTasks = () => dispatch => {
    return TaskApiUtil.fetchTasks()
    .then((tasks) => dispatch(receiveTasks(tasks)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const fetchTask = (taskId) => dispatch => {
    return TaskApiUtil.fetchTask(taskId)
    .tehn((task) => dispatch(receiveTask(task)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const createTask = (task) => dispatch => {
    return TaskApiUtil.createTask(task)
    .then((task) => dispatch(receiveTask(task)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const updateTask = (task) => dispatch => {
    return TaskApiUtil.updateTask(task)
    .then((task) => dispatch(receiveTask(task)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const deleteTask = (taskId) => dispatch => {
    return TaskApiUtil.deleteTask(taskId)
    .then((taskId) => dispatch(removeTask(taskId)
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})