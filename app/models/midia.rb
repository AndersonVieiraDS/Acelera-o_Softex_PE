class Midia < ApplicationRecord
    belongs_to :sala
  
    validates :nome, presence: true
    validates :tempo_duracao, numericality: { greater_than: 0 }
    validates :prazo_expiracao, presence: true
  end
  