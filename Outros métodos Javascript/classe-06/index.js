const numeros = [0, 122, 4, 7, 6, 8, 44];

const numbPares = numeros.every(x => x % 2 == 0)

console.log(numbPares ? "array válido" : "array inválido")

