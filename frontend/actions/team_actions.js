import * as TeamApiUtil from '../util/team_api_util'

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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
    type: RECEIVE_ERRORS,
    errors: errors
})



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

export const clearErrors = () => dispatch => ({
    type: CLEAR_ERRORS
})  