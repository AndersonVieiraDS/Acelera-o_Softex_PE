// //código em javascript em programação estruturada para o browser

// let num1 = Number(prompt("Digite a primeira nota: "));
// let num2 = Number(prompt("Digite a segunda nota: "));
// let num3 = Number(prompt("Digite a terceira nota: "));
// let media = (num1 + num2 + num3)/3

// if (media < 7){
//     alert(`Sua média é ${media} e vc está reprovado!`)
// } else{
//     alert(`Sua média é ${media} e vc está aprovado!`)
// }

let candidato1 = 0;
let candidato2 = 0;
let totalVotos = 5;

for (let i = 0; i < totalVotos; i++) {
    const candidate = parseInt(prompt("Digite o número do seu candidato: "));

        switch (candidate) {
            case 1:
                candidato1++;
                break;
            case 2:
                    candidato2++;
                    break;
        }
}
if (candidato1 > candidato2){
alert("Candidato 1 venceu!");
} else {
alert("Candidato 2 venceu!");
}