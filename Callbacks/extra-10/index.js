const notas = [6, 8, 9, 8];

const newNotas = []

notas.forEach((x) => {
    const ehIgual = newNotas.find((y) => {
        return y == x;
    })
    if (!ehIgual) {
        newNotas.push(x)
    }
})
console.log(newNotas)