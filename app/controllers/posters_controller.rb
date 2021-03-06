class PostersController < ApplicationController
  def index
    if params[:search]
      @posters = Poster.search(params[:search])
      render json: @posters
    else
      @posters = Poster.all
    end
  end

  def show
    @poster = Poster.find(params[:id])
    render json: @poster
  end

  def new
    @poster = Poster.new
  end

  def edit
    @poster = Poster.find(params[:id])
  end

  def create
    @poster = Poster.new(
      title: params[:title],
      artist: params[:artist],
      image: params[:image]
    )

    if @poster.save
      respond_to do |format|
        format.json { render json: @poster, status: :created }
      end
    end
  end

  def update
    @poster = Poster.find(params[:id])

    if @poster.update_attributes(poster_params)
      redirect_to poster_path(@poster)
    else
      render :edit
    end
  end

  def destroy
    @poster = Poster.find(params[:id])
    @poster.destroy
    redirect_to poster_path
  end

  protected

  def poster_params
    params.require(:poster).permit(
      :title, :artist, :image
    )
  end
end
