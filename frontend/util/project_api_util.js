export const fetchProjects = () => {
    return $.ajax({
        url: `/api/teams/${team.id}/projects`,
        method: 'GET'
    });
};

export const fetchProject = (projectId) => {
    return $.ajax({
        url: `/api/teams/${team.id}/projects/${projectId}`,
        method: 'GET'
    });
};

export const createProject = (project) => {
    return $.ajax({
        url: `/api/teams/${team.id}/projects`,
        method: 'POST',
        data: { project: project }
    });
};

export const updateProject = (project) => {
    return $.ajax({
        url: `/api/teams/${team.id}/projects/${projectId}`,
        method: 'PATCH',
        data: { project: project }
    });
};

export const deleteProject = (projectId) => {
    return $.ajax({
        url: `/api/teams/${team.id}/projects/${projectId}`,
        method: 'DELETE'
    });
};