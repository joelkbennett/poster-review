class CreatePosters < ActiveRecord::Migration
  def change
    create_table :posters do |t|
      t.string :title
      t.string :artist
      t.datetime :release_date

      t.timestamps
    end
  end
end
