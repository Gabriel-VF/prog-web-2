let n1 = Number(prompt("Insira o primeiro número: "));
let n2 = Number(prompt("Insira o segundo número: "));
let operacao = prompt("Insira a operação a fazer [+=*/]: ")

switch (operacao) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "/":
        console.log(n1 / n2);
        break;
    default:
        console.log("Operação inválida!");
        break;
}
