// Constantes para mensagens
const MENSAGEM_DEPOSITO_INVALIDO = "Por favor, insira uma quantia válida para depósito.";
const MENSAGEM_SAQUE_INVALIDO = "Saldo insuficiente ou quantia inválida para saque.";

// Função construtora para criar uma conta bancária
class ContaBancaria {
  constructor(nome, saldoInicial) {
    this.nome = nome;
    this.saldo = saldoInicial;
  }

  // Método para depositar dinheiro na conta
  depositar(quantia) {
    if (this.validarQuantia(quantia)) {
      this.saldo += quantia;
      console.log(`Depósito de $${quantia} realizado. Novo saldo: $${this.saldo}`);
    } else {
      console.log(MENSAGEM_DEPOSITO_INVALIDO);
    }
  }

  // Método para sacar dinheiro da conta
  sacar(quantia) {
    if (this.validarQuantia(quantia) && this.validarSaldoSuficiente(quantia)) {
      this.saldo -= quantia;
      console.log(`Saque de $${quantia} realizado. Novo saldo: $${this.saldo}`);
    } else {
      console.log(MENSAGEM_SAQUE_INVALIDO);
    }
  }

  // Método para verificar o saldo da conta
  verificarSaldo() {
    console.log(`Saldo atual da conta de ${this.nome}: $${this.saldo}`);
  }

  // Método privado para validar se a quantia é válida (maior que zero)
  validarQuantia(quantia) {
    return quantia > 0;
  }

  // Método privado para validar se há saldo suficiente para o saque
  validarSaldoSuficiente(quantia) {
    return quantia <= this.saldo;
  }
}

// Exemplo de uso
const minhaConta = new ContaBancaria("João", 1000);

minhaConta.verificarSaldo();
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.verificarSaldo();
