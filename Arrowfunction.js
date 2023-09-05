function exibirMenu() {
    console.log("Calculadora:");
    console.log("1. Adição");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
  }
  function calcular(opcao, num1, num2) {
    switch (opcao) {
      case 1:
        return num1 + num2;
      case 2:
        return num1 - num2;
      case 3:
        return num1 * num2;
      case 4:
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Divisão por zero não é permitida!";
        }
      default:
        return "Opção inválida";
    }
  }
  const iniciarCalculadora = () => {
    exibirMenu();
    const opcao = parseInt(prompt("Escolha uma opção:"));
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
  
    const resultado = calcular(opcao, num1, num2);
  
    console.log("Resultado:", resultado);
  };
  iniciarCalculadora();
