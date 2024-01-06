//Código em programação estruturada

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira nota: ', (num1) => {
  rl.question('Digite a segunda nota: ', (num2) => {
    rl.question('Digite a terceira nota: ', (num3) => {
      const media = (Number(num1) + Number(num2) + Number(num3)) / 3;

      if (media <= 7) {
        console.log(`Sua média é ${media} e você está reprovado!`);
      } else {
        console.log(`Sua média é ${media} e você está aprovado!`);
      }

      rl.close();
    });
  });
});

//Agora segue o mesmo códgio oreintado a objetos

import readline from 'readline';
class CalculadoraMedia {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  obterNotas() {
    return new Promise((resolve) => {
      this.rl.question('Digite a primeira nota: ', (num1) => {
        this.rl.question('Digite a segunda nota: ', (num2) => {
          this.rl.question('Digite a terceira nota: ', (num3) => {
            resolve([Number(num1), Number(num2), Number(num3)]);
          });
        });
      });
    });
  }

  calcularMedia(notas) {
    return notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
  }

  verificarAprovacao(media) {
    if (media <= 7) {
      console.log(`Sua média é ${media} e você está reprovado!`);
    } else {
      console.log(`Sua média é ${media} e você está aprovado!`);
    }
  }

  async iniciar() {
    const notas = await this.obterNotas();
    const media = this.calcularMedia(notas);
    this.verificarAprovacao(media);
    this.rl.close();
  }
}

const calculadora = new CalculadoraMedia();
calculadora.iniciar();
