class Admin::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def destroy
    user = User.find(params[:user_id])
    user.destroy
  end

end
