class Training < ApplicationRecord

  # Relationships
  belongs_to :teacher, class_name: 'User', foreign_key: 'teacher_id', validate: true

  has_many :sessions

  has_many :category_trainings, dependent: :destroy
  has_many :categories, through: :category_trainings
end
