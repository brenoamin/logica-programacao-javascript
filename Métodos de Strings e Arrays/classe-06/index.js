const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
//Letra a
let frutas2 = frutas;
let frutasReverse = frutas2.reverse();
frutasReverse = frutasReverse.join(", ")
console.log(frutasReverse);

//Letra b
frutas.reverse()
console.log(frutas)
frutas.splice(0, 1)
frutas.splice(frutas.length - 1, 1)
frutas.splice(frutas.length, 1, "Melão")
console.log(frutas)
