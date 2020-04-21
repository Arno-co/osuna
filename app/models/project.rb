class Project < ApplicationRecord
    validates :title, :description, :project_owner_id, :start_date, :end_date, presence: true

    belongs_to :user,
    foreign_key: :project_owner_id,
    class_name: :User

    has_many :assignments,
    foreign_key: :project_id,
    class_name: :Assignment

    has_many :tasks,
    foreign_key: :project_id,
    class_name: :Task

    has_many :teams,
    through: :assignments,
    source: :team
end
