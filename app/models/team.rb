class Team < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :teammates,
    foreign_key: :team_id,
    class_name: :User
end