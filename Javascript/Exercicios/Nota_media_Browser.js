//Código em programaçãoe struturada

let num1 = Number(prompt("Digite a primeira nota: "));
let num2 = Number(prompt("Digite a segunda nota: "));
let num3 = Number(prompt("Digite a terceira nota: "));
let media = (num1 + num2 + num3)/3

if (media <= 7){
    alert(`Sua média é ${media} e vc esá reprovado!`)
} else{
    alert(`Sua média é ${media} e vc esá aprovado!`)
}

//Código orientado a objetos

class CalculadoraMedia {
    constructor() {
      this.num1 = 0;
      this.num2 = 0;
      this.num3 = 0;
    }
  
    obterNotas() {
      this.num1 = Number(prompt("Digite a primeira nota: "));
      this.num2 = Number(prompt("Digite a segunda nota: "));
      this.num3 = Number(prompt("Digite a terceira nota: "));
    }
  
    calcularMedia() {
      return (this.num1 + this.num2 + this.num3) / 3;
    }
  
    verificarAprovacao(media) {
      if (media <= 6) {
        alert(`Sua média é ${media} e você está reprovado!`);
      } else {
        alert(`Sua média é ${media} e você está aprovado!`);
      }
    }
  
    iniciar() {
      this.obterNotas();
      const media = this.calcularMedia();
      this.verificarAprovacao(media);
    }
  }
  
  // Criar uma instância da classe e iniciar o processo
  const calculadora = new CalculadoraMedia();
  calculadora.iniciar();