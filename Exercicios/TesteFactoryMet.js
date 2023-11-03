// Implementação da interface para PC
var PC = /** @class */ (function () {
    class PC {
        constructor(ram, hdd, cpu) {
            this.ram = ram;
            this.hdd = hdd;
            this.cpu = cpu;
            this.type = 'PC';
        }
        toString() {
            return "PC - RAM: ".concat(this.ram, "GB, HDD: ").concat(this.hdd, "GB, CPU: ").concat(this.cpu, "GHz");
        }
    }
    return PC;
}());
// Implementação da interface para Server
var Server = /** @class */ (function () {
    class Server {
        constructor(ram, hdd, cpu) {
            this.ram = ram;
            this.hdd = hdd;
            this.cpu = cpu;
            this.type = 'Server';
        }
        toString() {
            return "Server - RAM: ".concat(this.ram, "GB, HDD: ").concat(this.hdd, "GB, CPU: ").concat(this.cpu, "GHz");
        }
    }
    return Server;
}());
// Fábrica para criar instâncias do tipo abstrato da interface
var ComputadorFactory = /** @class */ (function () {
    class ComputadorFactory {
        constructor() {
        }
        criarComputador(ram, hdd, cpu, type) {
            if (type === 'PC') {
                return new PC(ram, hdd, cpu);
            }
            else if (type === 'Server') {
                return new Server(ram, hdd, cpu);
            }
            else {
                throw new Error('Tipo de computador não suportado');
            }
        }
    }
    return ComputadorFactory;
}());
// Exemplo de uso da fábrica
var factory = new ComputadorFactory();
var meuPC = factory.criarComputador('8', '512', '2.5', 'PC');
var meuServer = factory.criarComputador('16', '1024', '3.0', 'Server');
console.log(meuPC.toString()); // Saída esperada: PC - RAM: 8GB, HDD: 512GB, CPU: 2.5GHz
console.log(meuServer.toString()); // Saída esperada: Server - RAM: 16GB, HDD: 1024GB, CPU: 3.0GHz