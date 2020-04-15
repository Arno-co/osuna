

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