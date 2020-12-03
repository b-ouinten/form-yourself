Rails.application.routes.draw do
  root to: 'pages#index'
  get 'register', to: 'pages#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:show]
      resources :profiles, only: %i[show]
      resources :trainings, only: %i[index]
    end
  end

  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/v1/login',
      sign_out: 'api/v1/logout',
      registration: 'api/v1/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

    match '*path', to: 'react#index', via: :get
end
