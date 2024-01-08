class Admin::EmpresasController < ApplicationController
    before_action :set_empresa, only: [:show, :edit, :update, :destroy]
  
    def index
      @empresas = Empresa.all
    end
  
    def show
    end
  
    def new
      @empresa = Empresa.new
    end
  
    def create
      @empresa = Empresa.new(empresa_params)
      if @empresa.save
        redirect_to admin_empresa_path(@empresa), notice: 'Empresa criada com sucesso.'
      else
        render :new
      end
    end
  
    def edit
    end
  
    def update
      if @empresa.update(empresa_params)
        redirect_to admin_empresa_path(@empresa), notice: 'Empresa atualizada com sucesso.'
      else
        render :edit
      end
    end
  
    def destroy
      @empresa.destroy
      redirect_to admin_empresas_path, notice: 'Empresa excluída com sucesso.'
    end
  
    private
  
    def set_empresa
      @empresa = Empresa.find(params[:id])
    end
  
    def empresa_params
      params.require(:empresa).permit(:nome, :outras_informacoes)
    end
  end
  