let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let productorio = ( conjunto ) => {
    return conjunto.reduce ( (corredor, x ) => {
    return corredor *= x }, 0);
}
console.log(productorio(numbers));
