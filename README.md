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

# System Design

# Users 
    - username 
    - email
    -team_id => references teams.id 

# Teams 
    -name
    -description

# Projects
    - title
    - description
    - start_date
    - end_date
    - project_owner_id => references users.id

# Tasks
    - title
    - description
    - start_date
    - end_date
    - milestone
    - completed
    - author_id => references users.id
    - assignee_id => references users.id
    - project_id => references projects.id

# Teams_projects
    - team_id => references teams.id
    - project_id => references projects.id