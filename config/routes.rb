Rails.application.routes.draw do
  resources :items
  resources :lists
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'whatdo#index'
  get '/landing', to: 'landing#landingpage', as: 'landing'
  get '/listitems/:id', to: 'lists#listitems'
end
