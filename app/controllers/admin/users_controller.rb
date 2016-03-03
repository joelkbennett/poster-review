class Admin::UsersController < ApplicationController

  def index
    # @users = User.all
    @users = User.order(:id).page(params[:page])
  end

  def destroy
    user = User.find(params[:user_id])
    user.destroy
  end

end
