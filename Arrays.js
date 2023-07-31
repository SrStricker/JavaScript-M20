var numeros = [4, 7, 78, 21, 116, 93, 2, 280, 106, 5];

let max = Math.max(...numeros);
let min = Math.min(...numeros);

let indexMax = numeros.indexOf(max);
let indexMin = numeros.indexOf(min);

console.log(`Índice do menor valor: ${indexMin}`);
console.log(`Índice do maior valor: ${indexMax}`); 