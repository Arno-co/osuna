import * as TeamApiUtil from '../util/team_api_util'

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';

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

export const fetchTeams = () => {
    return TeamApiUtil.fetchTeams()
        .then((teams) => dispatch(receiveTeams(teams)))
}

export const fetchTeam = (teamId) => {
    return TeamApiUtil.fetchTeam(teamId)
        .then((team) => dispatch(receiveTeam(team)))
}

export const createTeam = (team) => {
    return TeamApiUtil.createTeam(team)
        .then((team) => dispatch(receiveTeam(team)))
}

export const updateTeam = (team) => {
    return TeamApiUtil.updateTeam(team)
        .then((team) => dispatch(receiveTeam(team)))
}

export const deleteTeam = (teamId) => {
    return TeamApiUtil.deleteTeam(teamId)
        .then((teamId) => dispatch(removeTeam(teamId)))
}