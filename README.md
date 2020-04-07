# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

![osuna logo] (app/assets/images/logo.png / 'Osuna Logo')

# Osuna

Osunan is an Asana clone, it is a web application designed to help teams organize, track and manage their projects and related tasks. 
Users can access projects and tasks of their team, they can create and assign tasks.

[Osuna Live Demo](https://osuna.herokuapp.com/#/)

## Technologies

Osuna is built using Ruby on Rails, React.js, Redux.js, and PostgreSQL. 

# Features 

In Osuna, users can create or join a team. They can create and edit projects for this team through the home page.
They can view, create, edit, and assign tasks through the project page. Projects and tasks are accessible to the entire team that the user is part of. A task can be a milestone or a regular task. Users set a due date, and mark the task as complete. 


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