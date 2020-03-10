export const fetchTeams = () => {
    return $.ajax({
        url: '/api/teams',
        method: 'GET'
    });
};

export const fetchTeam = (teamId) => {
    return $.ajax({
        url: `/api/teams/${teamId}`,
        method: 'GET'
    });
};

export const createTeam = (team) => {
    return $.ajax({
        url: '/api/teams/',
        method: 'POST',
        data: { team: team }
    });
};

export const updateTeam = (team) => {
    return $.ajax({
        url: `/api/teams/${team.id}`,
        method: 'PATCH',
        data: { team: team }
    });
};

export const deleteTeam = (teamId) => {
    return $.ajax({
        url: `/api/teams/${teamId}`,
        method: 'DELETE'
    });
};