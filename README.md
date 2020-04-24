

# Osuna

Osuna is an Asana clone, it is a single page web application designed to help teams organize, track and manage their projects and related tasks. 
Users can access projects and tasks of their team, they can create and assign tasks.

![alt text](https://github.com/Arno-co/osuna/blob/master/app/assets/images/Splash.png "Splash page")


![alt text](https://github.com/Arno-co/osuna/blob/master/app/assets/images/Home.png "Home page")

[Osuna Live Demo](https://osuna.herokuapp.com/#/)

## Technologies
 * Backend: Ruby on Rails/PostgreSQL
 * Frontend: JavaScript/React/Redux
 * HTML5/CSS
 * Webpack

## Installation
### Pre-requisites
Postgres Database is required for Osuna to operate correctly.

### Setting up
Please run the following commands:

```
bundle install
npm install
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
```

### Running the app
Please run the following commands in separate tabs and maje sure Postgres is running:

```
rails s
npm run start
```

## Features 

[Osuna Design Documents](https://github.com/Arno-co/osuna/wiki)

In Osuna, users can create or join a team when they sign up.

![alt text](https://github.com/Arno-co/osuna/blob/master/app/assets/images/Splash_Home.gif)


They can create and edit projects for this team through the home page.
They can view, create, edit, and assign tasks through the project page. Projects and tasks are accessible to the entire team that the user is part of. Users set a due date, and can mark the task as complete. 


## Technical challenges

In Osuna, the user belongs to a team that has many projects. The projects can have several teams, they also many tasks and the user can have tasks from several projects.
The main challenge dealing with all these connected tables was to be efficient and avoid multiple backend calls but keeping the state as flat as possible. 
I used Active Record associations and filters to keep collections of IDs to limit the backend calls and avoiding nesting objects:

For example, the user entity keeps track of hos teammates, projects owned or participating, tasks authored or assigned:
```
json.extract! user, :id, :username, :email, :team_id

json.ownedProjectsIds do
  json.array! (user.projects.ids)
end

json.participatingProjectsIds do
  json.array! (user.participating_projects.ids)
end

json.teammatesIds do
  json.array! (user.teammates.ids)
end

json.authoredTasksIds do 
  json.array! (user.authored_tasks.ids)
end

json.assignedTasksIds do  
  json.array! (user.assigned_tasks.ids)
end
```
Here's the result in the user's slice of state:

![alt text](https://github.com/Arno-co/osuna/blob/master/app/assets/images/users_state.png "User slice of state")

This allows to filter the teams, projects and tasks on the frontend.

I also used local storage to have the user create or join a team before signing up. In this way, the team information is stored and dispatched to the backend only when the user signs up and is saved.

For example, in the Create Team form:

```
handleSubmit(e) {

        e.preventDefault();
        e.stopPropagation();
        const team = Object.assign({}, this.state);
        this.props.createTeam(team).then((result) => {
            // LOCAL STORAGE FOR TEAM_ID
            localStorage.setItem('myTeamInfo', JSON.stringify({
                id: result.team.id,
                name: this.state.name,
                description: this.state.description
            }));
            this.props.openModal('signup');
        
        }
        )
    }
```

## Going Forward

* Drag and drop for projects
* Tasks display on the home page
* Responsive CSS for mobile view


