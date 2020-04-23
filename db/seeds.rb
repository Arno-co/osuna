# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Assignment.destroy_all
Task.destroy_all
Project.destroy_all
User.destroy_all
Team.destroy_all

team_demo = Team.create(name: 'Beastie Boys', description: 'Best band ever')
team_1 = Team.create(name: 'Donika Crew', description: 'From Greece to Saint Barth')
team_2 = Team.create(name: 'Chicago Bulls', description: 'Come Fly With Us')
team_3 = Team.create(name: 'Marketing', description: 'Make that money!')


user_demo = User.create(username: 'Mike D', email: 'md@beastieboys.com', password:'password', team_id: team_demo.id)
user_1 = User.create(username: 'Ad Rock', email: 'ar@beastieboys.com', password:'password', team_id: team_demo.id)
user_2 = User.create(username: 'MCA', email: 'mca@beastieboys.com', password:'password', team_id: team_demo.id)
user_9 = User.create(username: 'Joseph Simmons', email: 'js@beastieboys.com', password:'password', team_id: team_demo.id)
user_10 = User.create(username: 'Darryl McDaniels', email: 'dmd@beastieboys.com', password:'password', team_id: team_demo.id)
user_11 = User.create(username: 'Jason Mizell', email: 'jm@beastieboys.com', password:'password', team_id: team_demo.id)

user_3 = User.create(username: 'Germain Pedron', email: 'captain@donika.com', password:'password', team_id: team_1.id)
user_6 = User.create(username: 'Greg Pedron', email: 'gp@donika.com', password:'password', team_id: team_1.id)
user_12 = User.create(username: 'Lazare Pedron', email: 'lp@donika.com', password:'password', team_id: team_1.id)
user_13 = User.create(username: 'Arnaud Cognard', email: 'ac@donika.com', password:'password', team_id: team_1.id)
user_14 = User.create(username: 'Elliott Fres', email: 'ef@donika.com', password:'password', team_id: team_1.id)
user_15 = User.create(username: 'Eric Tabarly', email: 'et@donika.com', password:'password', team_id: team_1.id)
user_16 = User.create(username: 'François Gabart', email: 'fg@donika.com', password:'password', team_id: team_1.id)
user_17 = User.create(username: 'Alex Thompson', email: 'at@donika.com', password:'password', team_id: team_1.id)

user_4 = User.create(username: 'Michael Jordan', email: 'mj@cb23.com', password:'password', team_id: team_2.id)
user_5 = User.create(username: 'Scottie Pippen', email: 'sp@cb23.com', password:'password', team_id: team_2.id)

user_7 = User.create(username: 'Eli Martinez', email: 'em@sg.com', password:'password', team_id: team_3.id)
user_8 = User.create(username: 'Xav Blanchant', email: 'xb@sg.com', password:'password', team_id: team_3.id)


project_demo = Project.create(title: 'World Tour Prep', description: 'The Intergalatic Show', project_owner_id: user_demo.id, start_date: '2020-04-08', end_date: '2021-12-12')
project_1 = Project.create(title: 'Repair the van', description: 'Have it ready 2 months before the first tour date', project_owner_id: user_demo.id, start_date: '2020-04-08', end_date: '2021-12-12')
project_3 = Project.create(title: 'Build the Stage', description: 'The biggest scene you''ve ever seen', project_owner_id: user_1.id, start_date: '2020-04-08', end_date: '2021-12-12')
project_4 = Project.create(title: 'Flight cases', description: 'Safety first', project_owner_id: user_2.id, start_date: '2020-04-08', end_date: '2021-12-12')
project_5 = Project.create(title: 'Promo', description: 'Dates, travel and merchandising', project_owner_id: user_10.id, start_date: '2020-04-08', end_date: '2021-12-12')

project_2 = Project.create(title: 'Donika transatlantic crossing prep', description: 'Donika is a 54 ft monohull from 1994 and we have to get her in shape for our next transat', project_owner_id: user_3.id , start_date: '2020-04-30' , end_date: '2022-12-31')
project_6 = Project.create(title: 'Sails prep', description: 'Assess what sails we have and what sails we will need depending on the season. Sails will have to be cleaned, fixed or replaced', project_owner_id: user_16.id , start_date: '2020-04-30' , end_date: '2022-08-31')
project_7 = Project.create(title: 'Travel Planning', description: 'Plan the routes, pit stops and weather', project_owner_id: user_17.id , start_date: '2020-04-30' , end_date: '2022-08-31')
project_8 = Project.create(title: 'Provisioning', description: 'Food, combustible and water', project_owner_id: user_17.id , start_date: '2020-04-30' , end_date: '2022-08-31')
project_9 = Project.create(title: 'GPS and maps', description: 'GPS equipment. Based on routes, select electronic and paper maps.', project_owner_id: user_3.id , start_date: '2021-04-30' , end_date: '2022-08-31')

task_1 = Task.create(title: 'Antifouling', description: 'Have the haul painted and coated', author_id: user_3.id, project_id: project_2.id, assignee_id: user_6.id, completed: false, start_date: '2020-10-30', end_date: '2021-04-30' )
task_2 = Task.create(title: 'Safety equipement', description: 'Electronics systems, safety backup equipment (including an EPERB) and communication systems (i.e., Sat Phone or Sail Mail), engines, fuel systems, and water maker.', author_id: user_3.id, project_id: project_2.id, assignee_id: user_12.id, completed: false, start_date: '2020-06-30', end_date: '2021-09-30' )
task_3 = Task.create(title: 'Instrument check', description: 'Test and practice with all instruments, electronic and backups.', author_id: user_3.id, project_id: project_2.id, assignee_id: user_13.id, completed: false, start_date: '2020-09-30', end_date: '2021-09-30' )
task_4 = Task.create(title: 'Select the sails', description: 'Make an optimized sail selection based on weather and budget.', author_id: user_16.id, project_id: project_6.id, assignee_id: user_14.id, completed: false, start_date: '2020-06-30', end_date: '2021-09-30' )
task_5 = Task.create(title: 'Book the sailmaker', description: 'Fix the sails. Change peak, tack and drew, brail eyes if needed.', author_id: user_16.id, project_id: project_6.id, assignee_id: user_15.id, completed: false, start_date: '2020-06-30', end_date: '2021-09-30' )
task_6 = Task.create(title: 'Store the sails', description: 'Empty, clean and reorganize the skipper cabin. Find a system to store the sails so they are accessible and storable', author_id: user_16.id, project_id: project_6.id, assignee_id: user_12.id, completed: false, start_date: '2020-06-30', end_date: '2021-09-30' )


assignment_demo = Assignment.create(project_id: project_demo.id, team_id: team_demo.id)
assignment_1 = Assignment.create(project_id: project_1.id, team_id: team_demo.id)
# assignment_2 = Assignment.create(project_id: project_1.id, team_id: team_1.id)
assignment_3 = Assignment.create(project_id: project_2.id, team_id: team_1.id)
assignment_4 = Assignment.create(project_id: project_3.id, team_id: team_demo.id)
assignment_5 = Assignment.create(project_id: project_4.id, team_id: team_demo.id)
assignment_6 = Assignment.create(project_id: project_5.id, team_id: team_demo.id)
assignment_7 = Assignment.create(project_id: project_6.id, team_id: team_1.id)
assignment_8 = Assignment.create(project_id: project_7.id, team_id: team_1.id)
assignment_9 = Assignment.create(project_id: project_8.id, team_id: team_1.id)
