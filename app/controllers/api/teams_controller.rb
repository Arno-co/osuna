class Api::TeamsController < ApplicationController
    before_action :require_logged_in, only:[:edit, :update, :destroy]


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
        @team.destroy
    end

    private

    def team_params
        params.require(:team).permit(:name, :description)
    end



end
