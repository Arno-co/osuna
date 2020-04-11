class Api::ProjectsController < ApplicationController
    before_action :require_logged_in, only:[:show, :index, :edit, :update, :destroy]


    def show
        @project = Project.find_by(id: params[:id])
        render :show
    end

    def index
        @projects = Project.all
        render :index
    end

    def create
        @project = Project.create(project_params)
            
        if @project.save
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
        @project.destroy
    end

    private

    def project_params
        params.require(:project).permit(:title, :description, :project_owner_id, :start_date, :end_date)
    end



end
