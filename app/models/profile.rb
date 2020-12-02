class Profile < ApplicationRecord

  # Relationships
  belongs_to :user

  # Validations
  enum type { admin: 'admin', teacher: 'teacher', student: 'student' }
  validates :type inclusion: { in: types.keys }
end
