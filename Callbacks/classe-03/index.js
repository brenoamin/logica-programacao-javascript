const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const arrayFrutas = frutas.map((x, i) => {
    return `${i} - ${x[0].toUpperCase()}${x.toLowerCase().slice(1)}`
})
console.log(arrayFrutas)
