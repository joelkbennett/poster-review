class Poster < ActiveRecord::Base
  
  mount_uploader :image, ImageUploader
  
  belongs_to :user
  has_many :reviews

  validates :title, presence: true
  validates :artist, presence: true
  validates :image, presence: true

  def review_average
    reviews.size == 0 ? 0 : reviews.sum(:rating) / reviews.size
  end

end
