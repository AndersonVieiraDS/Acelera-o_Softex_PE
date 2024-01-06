// Classe abstrata Veículo com método clone e represent
abstract class Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public cor: string,
      public numeroRodas: number
    ) {}
  
    abstract clone(): Veiculo;
    abstract represent(): string;
  }
  
  // Subclasse Carro que estende Veiculo
  class Carro extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      public numeroPortas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Veiculo {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent(): string {
      return `Carro - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Portas: ${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto que estende Veiculo
  class Moto extends Veiculo {
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, public cilindradas: number) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Veiculo {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
  
    represent(): string {
      return `Moto - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Cilindradas: ${this.cilindradas}`;
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    veiculos: Veiculo[] = [];
  
    constructor() {
      // Criar um array com seis veículos com dois tipos de veículos diferentes (subclasses)
      this.veiculos.push(new Carro('Sedan', 'Toyota', 'Azul', 4, 4));
      this.veiculos.push(new Carro('Hatchback', 'Ford', 'Vermelho', 4, 2));
      this.veiculos.push(new Moto('Sport', 'Honda', 'Preto', 2, 600));
      this.veiculos.push(new Moto('Cruiser', 'Harley-Davidson', 'Prata', 2, 1200));
      this.veiculos.push(new Carro('SUV', 'Chevrolet', 'Verde', 4, 5));
      this.veiculos.push(new Moto('Touring', 'BMW', 'Branco', 2, 1600));
    }
  
    // Método que retorna um array com clones dos veículos
    clonarVeiculos(): Veiculo[] {
      return this.veiculos.map((veiculo) => veiculo.clone());
    }
  
    // Método que imprime o retorno da função represent de cada elemento do array de clones de veículos
    imprimirRepresentacaoClones(): void {
      const clones = this.clonarVeiculos();
      clones.forEach((clone) => {
        console.log(clone.represent());
      });
    }
  }
  
  // Exemplo de uso
  const app = new Aplicacao();
  app.imprimirRepresentacaoClones();
  