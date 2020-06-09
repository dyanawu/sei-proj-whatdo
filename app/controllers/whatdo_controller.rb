class WhatdoController < ApplicationController
  def index
    if !current_user
      redirect_to landing_path
    end
  end
end
