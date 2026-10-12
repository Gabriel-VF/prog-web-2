let lista_numeros = [1, 2, 3, 4, 5, 6, 7, 8]
let primo = true;


for (n of lista_numeros) {
    primo = true;
    if (n <= 1) {
        primo = false;
        continue;
    } 
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo === true) {
        console.log(`Número ${n} é primo!`);
    }

}
