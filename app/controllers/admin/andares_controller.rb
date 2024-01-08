class Admin::AndaresController < ApplicationController
    before_action :set_andar, only: [:show, :edit, :update, :destroy]
  
    def index
      @andares = Andar.all
    end
  
    def show
    end
  
    def new
      @andar = Andar.new
    end
  
    def create
      @andar = Andar.new(andar_params)
      if @andar.save
        redirect_to admin_andar_path(@andar), notice: 'Andar criado com sucesso.'
      else
        render :new
      end
    end
  
    def edit
    end
  
    def update
      if @andar.update(andar_params)
        redirect_to admin_andar_path(@andar), notice: 'Andar atualizado com sucesso.'
      else
        render :edit
      end
    end
  
    def destroy
      @andar.destroy
      redirect_to admin_andares_path, notice: 'Andar excluído com sucesso.'
    end
  
    private
  
    def set_andar
      @andar = Andar.find(params[:id])
    end
  
    def andar_params
      params.require(:andar).permit(:numero, :outras_informacoes)
    end
  end
  