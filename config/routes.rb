Rails.application.routes.draw do
  # Rotas para Empresas
  resources :empresas, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  # Rotas para Salas
  resources :salas, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  # Rotas para Andares
  resources :andares, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  # Rotas para Mídias
  resources :midias, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  # Rotas para Autenticação (Devise)
  devise_for :usuarios

  # Rota principal
  root 'pagina_inicial#index'
  
  # Rota para exibir carrossel de mídias
  get '/carrossel_de_midias', to: 'tvs#carrossel', as: 'carrossel_midias'
end

