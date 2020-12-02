class Training < ApplicationRecord

  # Relationships
  belongs_to :teacher, class_name: 'User'

  has_many :sessions

  has_many :category_trainings
  has_many :categories, through: :category_trainings
end
