json.set! team.id do
    json.extract! team, :id, :name, :description
end