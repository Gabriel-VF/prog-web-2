let saldo = 0;
let operacao = "";
let valor = 0;
let numero_conta = 0;

while (true) {
    operacao = prompt("Insira operação a ser feita: ");
    switch (operacao) {
        case "depositar":
            valor = Number(prompt("Insira valor de depósito: "));
            if (valor < 0) {
                alert("Operação inválida");
            }
            saldo += valor;
            break;
        case "sacar":
            valor = Number(prompt("Insira valor de saque: "));
            if (valor < 0) {
                alert("Operação inválida");
                break;
            }
            if (valor > saldo) {
                alert("Saldo insuficiente: " + saldo);
                break;
            }
            saldo -= valor;
            break;
        case "informar saldo":
            alert("Saldo: " + saldo);
            break;
        default:
            alert("Operação inválida");
            break;
    }
}
