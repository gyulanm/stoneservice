Rails.application.routes.draw do
  root "pages#index"

  get 'blog', to: 'pages#blog'
  get 'promo', to: 'pages#promo'
  get 'search', to: 'pages#search'
  get 'stones', to: 'pages#stones'
  get 'enter', to: 'pages#enter'
  get 'history', to: 'pages#history'
  get 'jewelry', to: 'pages#jewelry'
  get 'jewelrystory', to: 'pages#jewelrystory'
  get 'post', to: 'pages#post'
  get 'publish', to: 'pages#publish'
  get 'register', to: 'pages#register'
  get 'support', to: 'pages#support'
  get 'tiffany', to: 'pages#tiffany'
  get 'trends', to: 'pages#trends'
  get 'zircon', to: 'pages#zircon'
end
