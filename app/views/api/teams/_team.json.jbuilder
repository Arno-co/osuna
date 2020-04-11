json.extract! team, :id, :name, :description

json.memberIds do
  json.array! (team.members.ids)
end
