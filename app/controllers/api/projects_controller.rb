class Api::ProjectsController < ApplicationController
    before_action :require_logged_in, only:[:show, :index, :edit, :update, :destroy]


    def show
        @project = Project.find_by(id: params[:id])
        render :show
    end

    def index
        @projects = Project
        .joins("INNER JOIN assignments ON projects.id = assignments.project_id")
        .joins("INNER JOIN teams ON assignments.team_id = teams.id")
        .where(teams: {id: current_user.team_id})

        render :index
    end

    def create
        @project = Project.create(project_params)
            
        if @project.save
            assignement = Assignment.create(project_id: @project.id, team_id: current_user.team_id) if current_user
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end



    def update
        @project = Project.find_by(id: params[:id])

        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def destroy
        @project = Project.find_by(id: params[:id])
        assignments = Assignment.where(assignments: {project_id: @project.id})
        assignments.each do |assignment|
            assignment.destroy
        end
        @project.destroy
    end

    private

    def project_params
        params.require(:project).permit(:title, :description, :project_owner_id, :start_date, :end_date)
    end



end
