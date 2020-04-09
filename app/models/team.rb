class Team < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :teammates,
    foreign_key: :team_id,
    class_name: :User

    has_many :assignments,
    foreign_key: :team_id,
    class_name: :Assignment 
   
    has_many :projects,
    through: :assignments,
    source: :project
end