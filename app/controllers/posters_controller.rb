class PostersController < ApplicationController
  def index
    @posters = Poster.all
  end

  def show
    @poster = Poster.find(params[:id])
  end

  def new
    @poster = Poster.new
  end

  def edit
    @poster = Poster.find(params[:id])
  end

  def create
    @poster = Poster.new(poster_params)

    if @poster.save
      redirect_to posters_path, notice: "#{@poster.title} added"
    else
      render :new
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
      :title, :artist, :release_date, :image
    )
  end
end
