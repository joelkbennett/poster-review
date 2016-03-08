class Admin::UsersController < ApplicationController

  def index
    @users = User.order(:id).page(params[:page])
  end

  def destroy
    user = User.find(params[:id])
    UserMailer.destroy_email(user)
    user.destroy

    respond_to do |format|
      format.json { render json: @user, status: :created, location: @user }
    end
  end

end
