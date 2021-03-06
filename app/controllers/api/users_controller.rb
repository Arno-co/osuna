class Api::UsersController < ApplicationController

    before_action :require_logged_in, only:[:show, :index, :edit, :update, :destroy]

    def new
        render :new
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def index
        @users = User.where(team_id: current_user.team_id)
        render :index
    end

    def create
        @user = User.create(user_params)
        if @user.save
            login(@user)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = @user.find_by(id: params[:id])

        if @user.update(user_params)
            render json: @user
            # user.update(team_id: params[:team_id])
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find_by(id: params[:id])
        @user.destroy
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :team_id)
    end



end
