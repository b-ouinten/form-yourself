class Category < ApplicationRecord

  # Relationships
  has_many :category_trainings
  has_many :trainings, through: :category_trainings
end
