# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Team.destroy_all
team_demo = Team.create(name: 'Beastie Boys', description: 'Best band ever')
team_1 = Team.create(name: 'Donika Crew', description: 'From Greece to Saint Barth')
team_2 = Team.create(name: 'Chicago Bulls', description: 'Come Fly With Us')
team_3 = Team.create(name: 'Marketing', description: 'Make that money!')

User.destroy_all
user_demo = User.create(username: 'MCA', email: 'mca@beastieboys.com', password:'password', team_id: team_demo.id)
user_1 = User.create(username: 'Ad Rock', email: 'mca@beastieboys.com', password:'password', team_id: team_demo.id)
user_2 = User.create(username: 'Mike D', email: 'md@beastieboys.com', password:'password', team_id: team_demo.id)
user_3 = User.create(username: 'Germain', email: 'captain@donika.com', password:'password', team_id: team_1.id)
user_6 = User.create(username: 'Greg', email: 'segond@donika.com', password:'password', team_id: team_1.id)
user_4 = User.create(username: 'Michael Jordan', email: 'mj@cb23.com', password:'password', team_id: team_2.id)
user_5 = User.create(username: 'Scottie Pippen', email: 'sp@cb23.com', password:'password', team_id: team_2.id)
user_7 = User.create(username: 'Eli Martinez', email: 'em@sg.com', password:'password', team_id: team_3.id)
user_7 = User.create(username: 'Xav Blanchant', email: 'xb@sg.com', password:'password', team_id: team_3.id)

