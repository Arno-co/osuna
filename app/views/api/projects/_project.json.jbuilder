json.extract! project, :id, :title, :description, :project_owner_id, :start_date, :end_date

json.tasks do 
    json.array! (project.tasks.ids)
end

json.teams do 
    json.array! (project.teams.ids)
end