//Código em programação estruturada

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

async function obterNotas() {
  const num1 = await pergunta('Digite a primeira nota: ');
  const num2 = await pergunta('Digite a segunda nota: ');
  const num3 = await pergunta('Digite a terceira nota: ');

  return [Number(num1), Number(num2), Number(num3)];
}

function pergunta(mensagem) {
  return new Promise((resolve) => {
    rl.question(mensagem, resolve);
  });
}

function calcularMedia(notas) {
  return notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
}

function verificarAprovacao(media) {
  if (media <= 7) {
    console.log(`Sua média é ${media} e você está reprovado!`);
  } else {
    console.log(`Sua média é ${media} e você está aprovado!`);
  }
}

async function iniciar() {
  const notas = await obterNotas();
  const media = calcularMedia(notas);
  verificarAprovacao(media);
  rl.close();
}

iniciar();


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
