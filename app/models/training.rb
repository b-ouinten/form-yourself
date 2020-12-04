class Training < ApplicationRecord

  # Relationships
  belongs_to :teacher, class_name: 'User', foreign_key: 'teacher_id', validate: true
  has_one :profile, through: :teacher

  has_many :sessions

  has_many :category_trainings, dependent: :destroy
  has_many :categories, through: :category_trainings

  scope :filter_by_title, lambda { |keyword|
    where('lower(title) LIKE ? ', "%#{keyword.downcase}%")
  }

  def self.search(params = {})
    trainings = params[:training_ids].present? ? Training.find(params[:training_ids]) : Training.all
    trainings = trainings.filter_by_title(params[:keyword]) if params[:keyword]
  end
end
