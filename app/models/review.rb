class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :poster

  validates :user, presence: true
  validates :poster, presence: true
  validates :rating, presence: true, numericality: { only_integer: true,
                                                     greater_than_or_equal_to: 0,
                                                     less_than_or_equal_to: 5 }

end
