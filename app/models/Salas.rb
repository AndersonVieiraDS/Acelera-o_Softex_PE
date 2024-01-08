class Sala < ApplicationRecord
  belongs_to :empresa
  belongs_to :andar
  has_many :midias

  validates :numero, presence: true
end
