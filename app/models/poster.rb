class Poster < ActiveRecord::Base
  
  belongs_to :user

  validates :title, presence: true
  validates :artist, presence: true

end
