class Task < ApplicationRecord
    validates :title, :description, :author_id, :project_id, :assignee_id, :completed, :start_date, :end_date, presence: true

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :user,
    foreign_key: :assignee_id,
    class_name: :User

end