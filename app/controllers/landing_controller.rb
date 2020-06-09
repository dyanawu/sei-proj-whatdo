class LandingController < ApplicationController
  def landing
    if current_user
      # render the onepage thing here
      redirect_to whatdo_path
    end
  end
end
