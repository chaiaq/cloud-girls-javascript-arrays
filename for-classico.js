const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}


// calculando a media com for

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);