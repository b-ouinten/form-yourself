class Api::V1::TrainingsController < Api::V1::BaseController
  def index
    render json: Training.all
  end
end
