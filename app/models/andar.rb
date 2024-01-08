class Andar < ApplicationRecord
    belongs_to :empresa
    has_many :salas
  
    validates :numero, presence: true
  end
  