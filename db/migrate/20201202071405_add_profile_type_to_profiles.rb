class AddProfileTypeToProfiles < ActiveRecord::Migration[6.0]
  def up
    execute <<-SQL
      CREATE TYPE profile_type AS ENUM ('admin', 'teacher', 'student');
    SQL
    add_column :profiles, :type_value, :profile_type
  end
  def down
    remove_column :profiles, :type_value
    execute <<-SQL
      DROP TYPE profile_type;
    SQL
  end
end
