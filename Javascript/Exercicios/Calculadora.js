import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterNumerosEOperacao() {
  return new Promise((resolve) => {
    rl.question('Digite o primeiro número: ', (num1) => {
      rl.question('Digite o segundo número: ', (num2) => {
        rl.question('Escolha o operador matemático (+, -, *, /): ', (operador) => {
          resolve({ num1: Number(num1), num2: Number(num2), operador });
          rl.close();
        });
      });
    });
  });
}

function calcularResultado(num1, num2, operador) {
  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return { resultado: num1 / num2, resto: num1 % num2 };
    default:
      return 'Operador inválido';
  }
}

async function main() {
  const { num1, num2, operador } = await obterNumerosEOperacao();
  const resultado = calcularResultado(num1, num2, operador);

  if (typeof resultado === 'object') {
    console.log(`O resultado é ${resultado.resultado.toFixed(2)} e o resto da divisão é ${resultado.resto}`);
  } else {
    console.log(`O resultado é ${resultado}`);
  }
}

main();
