let nota_n1 = Number(prompt("Nota da N1: "));
let nota_n2 = Number(prompt("Nota da N2: "));

let nota_final = (nota_n1 * 2 + nota_n2 * 3) / 5;

if (nota_final >= 7) {
    console.log("Aprovado. Nota: " + nota_final);
} else {
    console.log("Reprovado. Nota: " + nota_final);
}
