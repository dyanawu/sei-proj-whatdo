class UpdateLimits < ActiveRecord::Migration[6.0]
  def change
    change_column :items, :name, :text, :limit => 999
    change_column :lists, :name, :text, :limit => 999
  end
end
