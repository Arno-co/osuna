class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :author_id, null: false
      t.integer :project_id, null: false
      t.integer :assignee_id, null: false
      t.boolean :completed, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end
    add_index :tasks, :title
    add_index :tasks, :author_id
    add_index :tasks, :project_id
    add_index :tasks, :assignee_id
  end
end
