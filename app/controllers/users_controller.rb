class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:use_id] = @user.id
      redirect_to posters_path
    else
      render :new
    end
  end

  protected

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation) 
  end 
end
