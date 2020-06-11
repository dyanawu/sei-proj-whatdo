class Tag < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :lists

  validates :name, length: { maximum: 50,
                             too_long: "Max length exceeded" }
end
