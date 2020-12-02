class Profile < ApplicationRecord

  # Relationships
  belongs_to :user

  # Validations
  enum type_value: { admin: 'admin', teacher: 'teacher', student: 'student' }
  validates :type_value, inclusion: { in: type_values.keys }
  validates :user_id, uniqueness: true
end
