class Project < ApplicationRecord
    validates :title, :description, :project_owner_id, :start_end, :end_date, presence: true
    validates :title, :project_owner_id, uniqueness: true

    belongs_to :user,
    foreign_key: :project_owner_id,
    class_name: :User
end
