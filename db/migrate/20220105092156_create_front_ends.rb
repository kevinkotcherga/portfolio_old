class CreateFrontEnds < ActiveRecord::Migration[6.0]
  def change
    create_table :front_ends do |t|

      t.timestamps
    end
  end
end
