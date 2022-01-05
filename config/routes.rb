Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'profile', to: 'pages#profile'
  get 'competences', to: 'pages#competences'
  get 'experiences', to: 'pages#experiences'
  get 'portfolio', to: 'pages#portfolio'
  get 'contact', to: 'pages#contact'

  get 'front_end', to: 'projects#front_end'
  get 'full_stack', to: 'projects#full_stack'
end
