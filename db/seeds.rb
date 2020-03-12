# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Team.destroy_all
team_demo = Team.create(name: 'Beastie Boys', description: 'Best band ever')

User.destroy_all
user_demo = User.create(username: 'MCA', email: 'mca@beastieboys.com', password:'password', team_id: team_demo.id)

