class User < ActiveRecord::Base

  has_secure_password
  has_many :posters
  has_many :reviews

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

end
