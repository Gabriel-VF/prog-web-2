function aplicar_desconto(valor, quantidade, desconto = 1) {
    return valor * quantidade - valor * quantidade * desconto;
}

let valor = Number(prompt("Insira o valor do produto: "));
let quantidade = Number(prompt("Insira a quantidade: "));
let desconto = Number(prompt("Insira o valor de desconto em porcentagem se houver: "));

if (!isNaN(desconto)) {
    alert("Valor final: " + aplicar_desconto(valor, quantidade, desconto));
} else {
    alert("Valor final: " + aplicar_desconto(valor, quantidade));
}
