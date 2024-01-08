class Empresa < ApplicationRecord
  has_many :salas
  has_many :andares

  validates :nome, presence: true
end
