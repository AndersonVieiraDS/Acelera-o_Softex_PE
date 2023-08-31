const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const media = 7;
const nota3 = (media * 3) - (nota1 + nota2)

console.log(`Para passar com nota 7, você precisa tirar pelo menos ${nota3} pontos na próxima prova.`);