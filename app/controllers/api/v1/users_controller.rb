class Api::V1::UsersController < Api::V1::BaseController

  before_action :set_user, only: [:show]

  def show
    render_resource(@user)
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end