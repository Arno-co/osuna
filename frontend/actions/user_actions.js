import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// ACTION OBJECTS

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users: users
})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
})

const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId: userId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})


// ACTION CREATORS - The JS objects returned by these functions are the ACTIONS

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then((users) => (dispatch(receiveUsers(users))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const fetchUser = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then((user) => (dispatch(receiveUser(user))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const createUser = (user) => dispatch => {
    return UserApiUtil.createUser(user)
        .then((user) => (dispatch(receiveUser(user))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const updateUser = (user) => dispatch => {
    return UserApiUtil.updateUser(user)
        .then((user) => (dispatch(receiveUser(user))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const deleteUser = (userId) => dispatch => {
    return UserApiUtil.deleteUser(userId)
        .then((userId) => dispatch(removeUser(userId)))
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})   