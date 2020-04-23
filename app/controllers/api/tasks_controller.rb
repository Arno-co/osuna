class Api::TasksController < ApplicationController
    before_action :require_logged_in, only:[:show, :index, :edit, :update, :destroy]

    def show
        @task = Task.find_by(id: params[:id])
        render :show
        
    end

    def index
        @tasks = Task
        .joins("INNER JOIN projects ON  tasks.project_id = projects.id")
        .joins("INNER JOIN assignments ON projects.id = assignments.project_id")
        .joins("INNER JOIN teams ON assignments.team_id = teams.id")
        .where(teams: {id: current_user.team_id})

        render :index
    end

    def create
        
        @task = Task.create(task_params)
            
        if @task.save
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
    end



    def update
        @task = Task.find_by(id: params[:id])

        if @task.update(task_params)
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def destroy
        @task = Task.find_by(id: params[:id])
        @task.destroy
    end

    private

    def task_params
        params.require(:task).permit(:title, :description, :author_id, :project_id, :assignee_id, :completed, :start_date, :end_date)
    end
    
end
