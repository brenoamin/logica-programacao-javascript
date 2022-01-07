const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
//Questão a)
numeros.sort((a, b) => {
    if (a < b) {
        return -1
    }
    else if (a > b) {
        return 1
    }
    else {
        return 0
    }
})
console.log(numeros)
//Questão b)
numeros.sort((a, b) => {
    if (a > b) {
        return -1
    }
    else if (a < b) {
        return 1
    }
    else {
        return 0
    }
})
console.log(numeros)

//Questão c
console.log(numeros.sort())

frutas.sort((a, b) => a.localeCompare(b));
console.log(frutas)

//Questão d
frutas.sort((a, b) => b.localeCompare(a))
console.log(frutas)

//Questão f

frutas.sort((a, b) => a.length - b.length)
console.log(frutas)