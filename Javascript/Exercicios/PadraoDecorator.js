// Classe base que representa o sanduíche
class Sanduiche {
    getDescricao() {
      return "Sanduíche";
    }
  
    getCusto() {
      return 0;
    }
  }
  
  // Decorator base para os ingredientes adicionais
  
  class IngredienteAdicional extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    getDescricao() {
      return this.sanduiche.getDescricao();
    }
  
    getCusto() {
      return this.sanduiche.getCusto();
    }
  }
  
  // Classes concretas para os ingredientes específicos mencionados
  
  class FrangoAssado extends Sanduiche {
    getDescricao() {
      return "Frango Assado";
    }
  
    getCusto() {
      return 4.5;
    }
  }
  
  class Pepperoni extends IngredienteAdicional {
    constructor(sanduiche) {
      super(sanduiche);
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()} com Pepperoni`;
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  class QueijoMucarelaRalado extends IngredienteAdicional {
    constructor(sanduiche) {
      super(sanduiche);
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()} com Queijo Muçarela Ralado`;
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 2.0;
    }
  }
  
  // Exemplo de uso
  
  const sanduicheFrangoAssado = new FrangoAssado();
  const sanduicheComPepperoni = new Pepperoni(sanduicheFrangoAssado);
  const sanduicheFinal = new QueijoMucarelaRalado(sanduicheComPepperoni);
  
  console.log(`${sanduicheFinal.getDescricao()} custa R$ ${sanduicheFinal.getCusto().toFixed(2)}`);
  