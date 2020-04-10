

json.extract! user, :id, :username, :email, :team_id

json.participatingProjects do
  json.array! (user.participating_projects)
end