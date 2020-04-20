export const fetchProjects = () => {
    return $.ajax({
        url: `/api/projects`,
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
        data: {
            project:
            {
                title: project.title,
                description: project.description,
                project_owner_id: project.projectOwnerId,
                start_date: project.startDate,
                end_date: project.endDate

            }
        }
    });
};

export const updateProject = (project) => {
    return $.ajax({
        url: `/api/projects/${project.id}`,
        method: 'PATCH',
        data: { project: 
        { 
            title: project.title,
            description: project.description,
            project_owner_id: project.projectOwnerId,
            start_date: project.startDate,
            end_date: project.endDate

        } }
    });
};

export const deleteProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'DELETE'
    });
};