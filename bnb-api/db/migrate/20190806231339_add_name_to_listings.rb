class AddNameToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :name, :string
  end
end
