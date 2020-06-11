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

# proj_whatdo_development=# \d tag
# name       | text
# user_id    | bigint

require 'faker'

User.create!(
  email: "hi@hi",
  username: "hihi",
  password: "hihihi"
)

5.times do
  tag = Tag.create!(
    name: "to " + Faker::Verb.unique.base,
    user_id: User.first.id
  )
  puts "created tag '#{tag.name}' for user '#{tag.user.username}'"
end

30.times do
  list = List.create!(
    name: Faker::Verb.unique.ing_form,
    user_id: User.first.id
  )
  puts "created list '#{list.name}' for user '#{list.user.username}'"
end

50.times do
  list = List.find(rand(List.first.id..List.last.id))
  tag = Tag.find(rand(Tag.first.id..Tag.last.id))
  list.tags << tag unless list.tags.include?(tag)
  puts "added tag '#{tag.name}' to list '#{list.name}'"
end

150.times do
  list = List.find(rand(List.first.id..List.last.id))
  item = Item.create!(
    name: Faker::Company.unique.bs,
    done: Faker::Boolean.boolean(true_ratio: 0.3),
    list_id: list.id
  )
  puts "added item '#{item.name}' to list '#{list.name}'"
end
