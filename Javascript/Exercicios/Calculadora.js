//Fazendo uma calculadora com programação estruturada para rodar em um browser;

// let num1 = Number(prompt("Digite um número: "));
// let num2 = Number(prompt("Digite outro número: "));
// let opeMat = prompt("Escolha o operador matemático: 1: + ,2: - , 3: * , 4: /");

// switch(opeMat){
//     case '+':
//         alert(`O resultado é ${num1 + num2}`);
//         break;
//     case '-':
//         alert(`O resultado é ${num1 - num2}`);
//         break;
//     case '*':
//         alert(`O resultado é ${num1 * num2}`);
//         break;
//     case '/':
//         alert(`O resultado é ${(num1 / num2).toFixed(2)} e o resto da divisão é ${num1 % num2}`);
//         break;
// }

//Fazendo uma calculadora com programação estruturada, usando funções, para rodar em um browser;
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterInformacoesDoUsuario() {
  return new Promise((resolve) => {
    rl.question('Digite seu nome: ', (nome) => {
      rl.question('Digite seu gênero (masculino/feminino): ', (genero) => {
        resolve({ nome, genero });
        rl.close();
      });
    });
  });
}

async function main() {
  const informacoes = await obterInformacoesDoUsuario();
  console.log('Informações do usuário:', informacoes);
}

main();
