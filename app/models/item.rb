class Item < ApplicationRecord
  belongs_to :list

  validates :name, length: { maximum: 999,
                             too_long: "Max length exceeded" }
end
