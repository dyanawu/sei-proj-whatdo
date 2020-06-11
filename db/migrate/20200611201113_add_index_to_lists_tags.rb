class AddIndexToListsTags < ActiveRecord::Migration[6.0]
  def change
    add_index :lists_tags, [:list_id, :tag_id], :unique => true, :name => "by_list_and_tag"
  end
end
