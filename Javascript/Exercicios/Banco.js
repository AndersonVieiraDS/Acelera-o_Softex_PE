// Simulação de um banco simples em JavaScript

// Função construtora para criar uma conta bancária
class ContaBancaria {
  constructor(nome, saldoInicial) {

    this.nome = nome;
    this.saldo = saldoInicial;

    // Função para depositar dinheiro na conta
    this.depositar = function (quantia) {

      if (quantia > 0) {
        this.saldo += quantia;
        console.log(`Depósito de $${quantia} realizado. Novo saldo: $${this.saldo}`);
      } else {
        console.log("Por favor, insira uma quantia válida para depósito.");
      }
    };

    // Função para sacar dinheiro da conta
    this.sacar = function (quantia) {
      if (quantia > 0 && quantia <= this.saldo) {
        this.saldo -= quantia;
        console.log(`Saque de $${quantia} realizado. Novo saldo: $${this.saldo}`);
      } else {
        console.log("Saldo insuficiente ou quantia inválida para saque.");
      }
    };

    // Função para verificar o saldo da conta
    this.verificarSaldo = function () {
      console.log(`Saldo atual da conta de ${this.nome}: $${this.saldo}`);
    };
  }
}

// Exemplo de uso
const minhaConta = new ContaBancaria("João", 1000);

minhaConta.verificarSaldo();
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.verificarSaldo();