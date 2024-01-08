class Usuario < ApplicationRecord
    # Devise adiciona automaticamente autenticação e autorização
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :validatable
  end
  