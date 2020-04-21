import * as TeamApiUtil from '../util/team_api_util'

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// ACTION OBJECTS

const receiveTeams = (teams) => ({
    type: RECEIVE_TEAMS,
    teams: teams
})

const receiveTeam = (team) => ({
    type: RECEIVE_TEAM,
    team: team 
})

const removeTeam = (teamId) => ({
    type: REMOVE_TEAM,
    teamId: teamId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_TEAM_ERRORS,
    errors: errors
})


// ACTION CREATORS - The JS objects returned by these functions are the ACTIONS

export const fetchTeams = () => dispatch => {
    return TeamApiUtil.fetchTeams()
        .then((teams) => (dispatch(receiveTeams(teams))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const fetchTeam = (teamId) => dispatch => {
    return TeamApiUtil.fetchTeam(teamId)
        .then((team) => (dispatch(receiveTeam(team))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const createTeam = (team) => dispatch => {
    return TeamApiUtil.createTeam(team)
        .then((team) => (dispatch(receiveTeam(team))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const updateTeam = (team) => dispatch => {
    return TeamApiUtil.updateTeam(team)
        .then((team) => (dispatch(receiveTeam(team))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
}

export const deleteTeam = (teamId) => dispatch => {
    return TeamApiUtil.deleteTeam(teamId)
        .then((teamId) => dispatch(removeTeam(teamId)))
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})  