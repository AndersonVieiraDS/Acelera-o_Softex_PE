class Admin::MidiasController < ApplicationController
    before_action :set_midia, only: [:show, :edit, :update, :destroy]
  
    def index
      @midias = Midia.all
    end
  
    def show
    end
  
    def new
      @midia = Midia.new
    end
  
    def create
      @midia = Midia.new(midia_params)
      if @midia.save
        redirect_to admin_midia_path(@midia), notice: 'Mídia criada com sucesso.'
      else
        render :new
      end
    end
  
    def edit
    end
  
    def update
      if @midia.update(midia_params)
        redirect_to admin_midia_path(@midia), notice: 'Mídia atualizada com sucesso.'
      else
        render :edit
      end
    end
  
    def destroy
      @midia.destroy
      redirect_to admin_midias_path, notice: 'Mídia excluída com sucesso.'
    end
  
    private
  
    def set_midia
      @midia = Midia.find(params[:id])
    end
  
    def midia_params
      params.require(:midia).permit(:nome, :tempo_duracao, :prazo_expiracao, :outras_informacoes)
    end
  end
  