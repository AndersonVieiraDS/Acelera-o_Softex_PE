let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
let opeMat = prompt("Escolha o operador matemático: 1: + ,2: - , 3: * , 4: /");

switch(opeMat){
    case '+':
        alert(`O resultado é ${num1 + num2}`);
        break;
    case '-':
        alert(`O resultado é ${num1 - num2}`);
        break;
    case '*':
        alert(`O resultado é ${num1 * num2}`);
        break;
    case '/':
        alert(`O resultado é ${(num1 / num2).toFixed(2)} e o resto da divisão é ${num1 % num2}`);
        break;
}