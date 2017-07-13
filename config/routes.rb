Rails.application.routes.draw do
  # http://guides.rubyonrails.org/routing.html
  get '/moo' => 'pages#moo'
  root 'pages#home'
end
