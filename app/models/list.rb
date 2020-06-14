class List < ApplicationRecord
  belongs_to :user
  has_many :items, dependent: :destroy

  validates :name, length: { maximum: 999,
                             too_long: "Max length exceeded" }
end
