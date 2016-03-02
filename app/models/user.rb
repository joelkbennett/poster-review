class User < ActiveRecord::Base

  has_secure_password
  has_many :posters

  validates :username, presense: true, uniquness: true
  validates :email, presence: true, uniqness: true

end
