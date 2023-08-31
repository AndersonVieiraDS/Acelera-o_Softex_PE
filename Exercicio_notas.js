let num1 = Number(prompt("Digite a primeira nota: "));
let num2 = Number(prompt("Digite a segunda nota: "));
let num3 = Number(prompt("Digite a terceira nota: "));
let media = (num1 + num2 + num3)/3

if (media < 7){
    alert(`Sua média é ${media} e vc esá reprovado!`)
} else{
    alert(`Sua média é ${media} e vc esá aprovado!`)
}