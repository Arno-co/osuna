

# Osuna

Osuna is an Asana clone, it is a single page web application designed to help teams organize, track and manage their projects and related tasks. 
Users can access projects and tasks of their team, they can create and assign tasks.

[Osuna Live Demo](https://osuna.herokuapp.com/#/)

## Technologies
 * Backend: Ruby on Rails/PostgreSQL
 * Frontend: JavaScript/React/Redux
 * HTML5/SCSS
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

They can create and edit projects for this team through the home page.
They can view, create, edit, and assign tasks through the project page. Projects and tasks are accessible to the entire team that the user is part of. Users set a due date, and can mark the task as complete. 


## System Design

### Users 
    - username 
    - email
    -team_id => references teams.id 

### Teams 
    -name
    -description

### Projects
    - title
    - description
    - start_date
    - end_date
    - project_owner_id => references users.id

### Tasks
    - title
    - description
    - start_date
    - end_date
    - milestone
    - completed
    - author_id => references users.id
    - assignee_id => references users.id
    - project_id => references projects.id

### Teams_projects
    - team_id => references teams.id
    - project_id => references projects.id
