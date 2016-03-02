class ReviewsController < ApplicationController

  before_filter :load_poster
  before_filter :restrict_access

  def new
    @poster = Poster.find(params[:poster_id])
    @review = @poster.reviews.build
  end

  def create
    @poster = Poster.find(params[:poster_id])
    @review = @poster.reviews.build(review_params)

    @review.user_id = current_user.id

    if @review.save
      redirect_to @poster, notice: "Review Created"
    else
      render :new
    end
  end

  protected

  def load_poster 
    @poster = Poster.find(params[:poster_id])
  end

  def review_params
    params.require(:review).permit(:text, :rating)
  end
end
