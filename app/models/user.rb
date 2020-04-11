class User < ApplicationRecord
    validates :username,  presence: true, uniqueness: true
    validates :email,  presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token,  presence: true, uniqueness: true
    validates :password_digest,  presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    belongs_to :team,
    foreign_key: :team_id,
    class_name: :Team

    has_many :projects,
    foreign_key: :project_owner_id,
    class_name: :Project

    has_many :participating_projects,
    through: :team,
    source: :projects

    has_many :teammates,
    through: :team,
    source: :members


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)   
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
