Rails.application.routes.draw do
  # http://guides.rubyonrails.org/routing.html

  devise_for :users,
    path: 'users',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      password: 'secret',
      #confirmation: 'verification',
      #unlock: 'unblock',
      #registration: 'register',
      sign_up: 'register'
    },
    :controllers => {
      registrations: 'users/registrations'
  }
  namespace :users do
    #resources :things # /users/things
    get '/dashboard' => 'pages#dashboard'
    root 'pages#dashboard'
  end

  get '/moo' => 'pages#moo'
  root 'pages#home'
end
