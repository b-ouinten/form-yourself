class Api::V1::TrainingsController < ApplicationController
  def index
    render json: Training.all, include: [:sessions, :profile]
  end
end
