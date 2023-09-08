const banco = {
    conta: "123456",
    saldo: 0,
    tipoConta: "Corrente",
    agencia: "7890",
  
    buscarSaldo: function () {
      return `Seu saldo atual é de R$ ${this.saldo},00`;
    },
  
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$ ${valor},00 realizado com sucesso. Novo saldo: R$ ${this.saldo},00`;
      } else {
        return "Valor de depósito inválido.";
      }
    },
  
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$ ${valor},00 realizado com sucesso. Novo saldo: R$ ${this.saldo},00`;
      } else {
        return "Saldo insuficiente ou valor de saque inválido.";
      }
    },
  
    numeroConta: function () {
      return `O número da sua conta é ${this.conta}`;
    },
  };
  
  console.log(banco.buscarSaldo());
  console.log(banco.deposito(500));
  console.log(banco.saque(200));
  console.log(banco.numeroConta());
  