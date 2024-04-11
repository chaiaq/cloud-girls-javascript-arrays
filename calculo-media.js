/*
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);
*/

const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas[2]);
console.log(media);

notas.push(5);
console.log(notas);

notas.pop();
console.log(notas);

console.log(media.toFixed(2));


