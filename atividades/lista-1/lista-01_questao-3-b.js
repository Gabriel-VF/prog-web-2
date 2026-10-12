let lista = [];
let n = 1;

while (true) {
    n = Number(prompt("Insira um número. Use 0 para parar: "));
    if (n === 0) {
        break;
    }
    lista.push(n);
}


let produto = 1;
for (n of lista) {
    produto *= n;
}
console.log("Produto: " + produto);
