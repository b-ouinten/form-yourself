class Api::V1::TrainingsController < Api::V1::BaseController
  def index
    render json: Training.search(params), include: [:sessions, :profile]
  end
end
