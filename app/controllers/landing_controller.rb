class LandingController < ApplicationController
  def index
    if current_user
      render plain: "#{current_user.username} logged in"
    end
  end
end
