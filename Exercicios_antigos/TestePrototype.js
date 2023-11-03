var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe abstrata Veículo com método clone e represent
var Veiculo = /** @class */ (function () {
    class Veiculo {
        constructor(modelo, marca, cor, numeroRodas) {
            this.modelo = modelo;
            this.marca = marca;
            this.cor = cor;
            this.numeroRodas = numeroRodas;
        }
    }
    return Veiculo;
}());
// Subclasse Carro que estende Veiculo
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    class Carro {
        constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
            var _this = _super.call(this, modelo, marca, cor, numeroRodas) || this;
            _this.numeroPortas = numeroPortas;
            return _this;
        }
        clone() {
            return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
        }
        represent() {
            return "Carro - Modelo: ".concat(this.modelo, ", Marca: ").concat(this.marca, ", Cor: ").concat(this.cor, ", Rodas: ").concat(this.numeroRodas, ", Portas: ").concat(this.numeroPortas);
        }
    }
    return Carro;
}(Veiculo));
// Subclasse Moto que estende Veiculo
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    class Moto {
        constructor(modelo, marca, cor, numeroRodas, cilindradas) {
            var _this = _super.call(this, modelo, marca, cor, numeroRodas) || this;
            _this.cilindradas = cilindradas;
            return _this;
        }
        clone() {
            return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
        }
        represent() {
            return "Moto - Modelo: ".concat(this.modelo, ", Marca: ").concat(this.marca, ", Cor: ").concat(this.cor, ", Rodas: ").concat(this.numeroRodas, ", Cilindradas: ").concat(this.cilindradas);
        }
    }
    return Moto;
}(Veiculo));
// Classe Aplicação
var Aplicacao = /** @class */ (function () {
    class Aplicacao {
        constructor() {
            this.veiculos = [];
            // Criar um array com seis veículos com dois tipos de veículos diferentes (subclasses)
            this.veiculos.push(new Carro('Sedan', 'Toyota', 'Azul', 4, 4));
            this.veiculos.push(new Carro('Hatchback', 'Ford', 'Vermelho', 4, 2));
            this.veiculos.push(new Moto('Sport', 'Honda', 'Preto', 2, 600));
            this.veiculos.push(new Moto('Cruiser', 'Harley-Davidson', 'Prata', 2, 1200));
            this.veiculos.push(new Carro('SUV', 'Chevrolet', 'Verde', 4, 5));
            this.veiculos.push(new Moto('Touring', 'BMW', 'Branco', 2, 1600));
        }
        // Método que retorna um array com clones dos veículos
        clonarVeiculos() {
            return this.veiculos.map(function (veiculo) { return veiculo.clone(); });
        }
        // Método que imprime o retorno da função represent de cada elemento do array de clones de veículos
        imprimirRepresentacaoClones() {
            var clones = this.clonarVeiculos();
            clones.forEach(function (clone) {
                console.log(clone.represent());
            });
        }
    }
    return Aplicacao;
}());
// Exemplo de uso
var app = new Aplicacao();
app.imprimirRepresentacaoClones();