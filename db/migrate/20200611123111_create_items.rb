class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.text :name
      t.boolean :done, default: false
      t.belongs_to :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
