# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              new_api_user GET    /api/users/new(.:format)                                                                 api/users#new {:format=>:json}
#             edit_api_user GET    /api/users/:id/edit(.:format)                                                            api/users#edit {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#         api_team_projects GET    /api/teams/:team_id/projects(.:format)                                                   api/projects#index {:format=>:json}
#                 api_teams GET    /api/teams(.:format)                                                                     api/teams#index {:format=>:json}
#                           POST   /api/teams(.:format)                                                                     api/teams#create {:format=>:json}
#              new_api_team GET    /api/teams/new(.:format)                                                                 api/teams#new {:format=>:json}
#             edit_api_team GET    /api/teams/:id/edit(.:format)                                                            api/teams#edit {:format=>:json}
#                  api_team GET    /api/teams/:id(.:format)                                                                 api/teams#show {:format=>:json}
#                           PATCH  /api/teams/:id(.:format)                                                                 api/teams#update {:format=>:json}
#                           PUT    /api/teams/:id(.:format)                                                                 api/teams#update {:format=>:json}
#                           DELETE /api/teams/:id(.:format)                                                                 api/teams#destroy {:format=>:json}
#              api_projects POST   /api/projects(.:format)                                                                  api/projects#create {:format=>:json}
#           new_api_project GET    /api/projects/new(.:format)                                                              api/projects#new {:format=>:json}
#          edit_api_project GET    /api/projects/:id/edit(.:format)                                                         api/projects#edit {:format=>:json}
#               api_project GET    /api/projects/:id(.:format)                                                              api/projects#show {:format=>:json}
#                           PATCH  /api/projects/:id(.:format)                                                              api/projects#update {:format=>:json}
#                           PUT    /api/projects/:id(.:format)                                                              api/projects#update {:format=>:json}
#                           DELETE /api/projects/:id(.:format)                                                              api/projects#destroy {:format=>:json}
#           new_api_session GET    /api/session/new(.:format)                                                               api/sessions#new {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :teams do
      resources :projects, only: [:index]
    end
    resources :projects, except: [:index]
    resource :session, only: [:create, :destroy]
  end

end
