class Admin::SalasController < ApplicationController
    before_action :set_sala, only: [:show, :edit, :update, :destroy]
  
    def index
      @salas = Sala.all
    end
  
    def show
    end
  
    def new
      @sala = Sala.new
    end
  
    def create
      @sala = Sala.new(sala_params)
      if @sala.save
        redirect_to admin_sala_path(@sala), notice: 'Sala criada com sucesso.'
      else
        render :new
      end
    end
  
    def edit
    end
  
    def update
      if @sala.update(sala_params)
        redirect_to admin_sala_path(@sala), notice: 'Sala atualizada com sucesso.'
      else
        render :edit
      end
    end
  
    def destroy
      @sala.destroy
      redirect_to admin_salas_path, notice: 'Sala excluída com sucesso.'
    end
  
    private
  
    def set_sala
      @sala = Sala.find(params[:id])
    end
  
    def sala_params
      params.require(:sala).permit(:numero, :outras_informacoes)
    end
  end
  