class Api::V1::TrainingsSessionsController < ApplicationController
  def index
    render json: Session.all, include: [:training]
  end
end
