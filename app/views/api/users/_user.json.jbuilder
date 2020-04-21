
json.extract! user, :id, :username, :email, :team_id

json.ownedProjectsIds do
  json.array! (user.projects.ids)
end

json.participatingProjectsIds do
  json.array! (user.participating_projects.ids)
end

json.teammatesIds do
  json.array! (user.teammates.ids)
end

json.authoredTasks do 
  json.array! (user.authored_tasks.ids)
end

json.assignedTasks do  
  json.array! (user.assigned_tasks.ids)
end