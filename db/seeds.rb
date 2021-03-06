# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# proj_whatdo_development=# \d items
# name       | text
# done       | boolean

# proj_whatdo_development=# \d list
# name       | text
# user_id    | bigint

require 'faker'

User.create!(
  email: "hi@hi",
  username: "hihi",
  password: "hihihi"
)

User.create!(
  email: "ko@ko",
  username: "koko",
  password: "kokoko"
)

20.times do
  list = List.create!(
    name: Faker::Company.name,
    user_id: rand(User.first.id..User.last.id)
  )
  puts "created list '#{list.name}' for user '#{list.user.username}'"
end

80.times do
  list = List.find(rand(List.first.id..List.last.id))
  item = Item.create!(
    name: Faker::Company.unique.bs,
    done: Faker::Boolean.boolean(true_ratio: 0.3),
    list_id: list.id
  )
  puts "added item '#{item.name}' to list '#{list.name}'"
end
