function impares(arr) {
    let arr_impares = [];
    for (n of arr) {
        if (n % 2 != 0) {
            arr_impares.push(n);
        }
    }
    return arr_impares;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arr_impares = impares(arr);

console.log(arr_impares);
