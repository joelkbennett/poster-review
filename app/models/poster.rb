class Poster < ActiveRecord::Base
  
  belongs_to :user
  has_many :reviews

  validates :title, presence: true
  validates :artist, presence: true

end
