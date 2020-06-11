class ListsTags < ActiveRecord::Migration[6.0]
  def change
    create_table :lists_tags do |t|
      t.references :list
      t.references :tag
      t.timestamps
    end
  end
end
