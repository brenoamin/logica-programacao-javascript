const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
function filtro(nomes, posicao) {
    const resultado = nomes.slice(posicao, posicao + 3)
    console.log(resultado.join(" - "))
}
filtro(nomes, posicao)