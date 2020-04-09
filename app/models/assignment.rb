class Assignment < ApplicationRecord

belongs_to :project,
foreign_key: :project_id,
class_name: :Project

belongs_to :team,
foreign_key: :team_id,
class_name: :Team

end
