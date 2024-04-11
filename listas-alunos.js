const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


// documentação slice:
// arr.slice([início[,fim]])
// o elemento de fim não está incluso no slice

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
// inicia na primeira posição (0) e termina na metade da lista
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);
// inicia na metade e termina no último (não precisa por o final)

console.log(sala1);
console.log(sala2);

// documentação splice:
// arr.splice(início,número de elementos excluídos, adicionar)
// o primeiro é o início e o segundo é o número de elementos excluídos

listaEstudantes.splice(1, 2);
console.log(listaEstudantes);
listaEstudantes.splice(1, 2, 'Joselina', 'Maricota');
console.log(listaEstudantes);