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

// function exibirMenu() {
//     console.log("Calculadora:");
//     console.log("1. Adição");
//     console.log("2. Subtração");
//     console.log("3. Multiplicação");
//     console.log("4. Divisão");
//   }
//   function calcular(opcao, num1, num2) {
//     switch (opcao) {
//       case 1:
//         return num1 + num2;
//       case 2:
//         return num1 - num2;
//       case 3:
//         return num1 * num2;
//       case 4:
//         if (num2 !== 0) {
//           return num1 / num2;
//         } else {
//           return "Divisão por zero não é permitida!";
//         }
//       default:
//         return "Opção inválida";
//     }
//   }
//   const iniciarCalculadora = () => {
//     exibirMenu();
//     const opcao = parseInt(prompt("Escolha uma opção:"));
//     const num1 = parseFloat(prompt("Digite o primeiro número:"));
//     const num2 = parseFloat(prompt("Digite o segundo número:"));
  
//     const resultado = calcular(opcao, num1, num2);
  
//     console.log("Resultado:", resultado);
//   };
//   iniciarCalculadora();

// fazendo uma calculadora com P.O.O para rodar no node;

import readline from 'readline';

class Calculadora {
    constructor() {
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

        this.num1 = 0;
        this.num2 = 0;
        this.escolha = '';

        this.solicitarNumeros();
    }

    solicitarNumeros() {
        this.rl.question('Digite o primeiro número: ', (num1) => {
          this.num1 = parseFloat(num1);
          this.rl.question('Digite o segundo número: ', (num2) => {
            this.num2 = parseFloat(num2);
            this.rl.question('Digite a operação (+, -, *, /): ', (escolha) => {
              this.escolha = escolha;
              this.opeMat();
              this.rl.close();
            });
          });
        });
    }

    opeMat () {

            switch (this.escolha) {
                case '+':
                    console.log(`O resultado é ${this.num1 + this.num2}`);
                    break;
                case '-':
                    console.log(`O resultado é ${this.num1 - this.num2}`);
                    break;
                case '*':
                    console.log(`O resultado é ${this.num1 * this.num2}`);
                    break;
                case '/':
                    console.log(`O resultado é ${(this.num1 / this.num2).toFixed(2)} e o resto da divisão é ${this.num1 % this.num2}`);
                    break;
                }
            }
        }

const resultado = new Calculadora ();