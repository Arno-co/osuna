export const fetchTasks = () => {
    return $.ajax({
        url: `/api/tasks`,
        method: 'GET'
    });
};

export const fetchTask = (taskId) => {
    return $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'GET'
    });
};

export const createTask = (task) => {
    return $.ajax({
        url: `/api/tasks`,
        method: 'POST',
        data: {
            task:
            {
                title: task.title,
                description: task.description,
                author_id: task.authorId,
                project_id: task.projectId,
                assignee_id: task.assigneeId,
                completed: task.completed,
                start_date: task.startDate,
                end_date: task.endDate
            }
        }
    });
};

export const updateTask = (task) => {
    return $.ajax({
        url: `/api/tasks/${task.id}`,
        method: 'PATCH',
        data: {
            task:
            {
                title: task.title,
                description: task.description,
                author_id: task.authorId,
                project_id: task.projectId,
                assignee_id: task.assigneeId,
                completed: task.completed,
                start_date: task.startDate,
                end_date: task.endDate
            }
        }
    });
};

export const deleteTask = (taskId) => {
    return $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'DELETE'
    });
};