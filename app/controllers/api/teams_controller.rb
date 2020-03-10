class Api::TeamsController < ApplicationController
    before_action :require_logged_in, only:[:show, :index, :edit, :update, :destroy]

    def new
        render :new
    end

    def show
        @team = Team.find_by(id: params[:id])
        render :show
    end

    def index
        @teams = Team.all
        render :index
    end

    def create
        @team = Team.create(team_params)
            
        if @team.save
            login(@team)
            render :show
        else
            render json: @team.errors.full_messages, status: 422
        end
    end

    def edit
        render :edit
    end

    def update
        @team = Team.find_by(id: params[:id])

        if @team.update(team_params)
            render :show
        else
            render json: @team.errors.full_messages, status: 422
        end
    end

    def destroy
        @team = Team.find_by(id: params[:id])
        @project.destroy
    end

    private

    def project_params
        params.require(:team).permit(:name, :description)
    end



end
