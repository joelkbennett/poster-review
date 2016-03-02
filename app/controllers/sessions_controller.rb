class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to posters_path, notice: "Welcome back, #{user.username}"
    else 
      flash.now[:alert] = "Log in failed"
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to posters_path, notice: 'Sign-out successful'
  end
  
end
