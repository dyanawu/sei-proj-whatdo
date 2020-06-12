Rails.application.routes.draw do
  resources :tags
  resources :items
  resources :lists
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'whatdo#index'
  get '/landing', to: 'landing#landingpage', as: 'landing'
  get '/untaggedlists', to: 'lists#untaggedlists'
  get '/taglists/:id', to: 'tags#taglists'
  get '/listtags/:id', to: 'lists#listtags'
  get '/listitems/:id', to: 'lists#listitems'
end
