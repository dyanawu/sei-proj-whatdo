class List < ApplicationRecord
  belongs_to :user
  has_many :items, dependent: :destroy
  has_and_belongs_to_many :tags
end
