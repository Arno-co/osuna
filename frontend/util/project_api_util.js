export const fetchProjects = (teamId) => {
    return $.ajax({
        url: `/api/teams/${teamId}/projects`,
        method: 'GET'
    });
};

export const fetchProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'GET'
    });
};

export const createProject = (project) => {
    return $.ajax({
        url: `/api/projects`,
        method: 'POST',
        data: { project: project }
    });
};

export const updateProject = (project) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'PATCH',
        data: { project: project }
    });
};

export const deleteProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'DELETE'
    });
};