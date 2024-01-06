// Interface comum para produtos
interface Computador {
    ram: string;
    hdd: string;
    cpu: string;
    toString(): string;
  }
  
  // Implementação da interface para PC
  class PC implements Computador {
    constructor(public ram: string, public hdd: string, public cpu: string) {
      this.type = 'PC';
    }
      type: string;
  
    toString(): string {
      return `PC - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  }
  
  // Implementação da interface para Server
  class Server implements Computador {
    constructor(public ram: string, public hdd: string, public cpu: string) {
      this.type = 'Server';
    }
      type: string;
  
    toString(): string {
      return `Server - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  }
  
  // Fábrica para criar instâncias do tipo abstrato da interface
  class ComputadorFactory {
    criarComputador(ram: string, hdd: string, cpu: string, type: string): Computador {
      if (type === 'PC') {
        return new PC(ram, hdd, cpu);
      } else if (type === 'Server') {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador não suportado');
      }
    }
  }
  
  // Exemplo de uso da fábrica
  const factory = new ComputadorFactory();
  
  const meuPC = factory.criarComputador('8', '512', '2.5', 'PC');
  const meuServer = factory.criarComputador('16', '1024', '3.0', 'Server');
  
  console.log(meuPC.toString());      // Saída esperada: PC - RAM: 8GB, HDD: 512GB, CPU: 2.5GHz
  console.log(meuServer.toString());  // Saída esperada: Server - RAM: 16GB, HDD: 1024GB, CPU: 3.0GHz
  