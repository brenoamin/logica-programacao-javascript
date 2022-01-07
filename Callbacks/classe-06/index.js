let duração = 10;
const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
let contador = jogadores.length;
function imprimirJogador(jogadores) {

    if (!contador) {
        console.log("A rodada terminou!")
        clearInterval(IntervalID)
    }
    else {
        console.log(jogadores[contador - 1]);
        duração -= 10 / jogadores.length;
        contador = contador - 1;
    }
}
const IntervalID = setInterval(imprimirJogador, 10000 / jogadores.length, jogadores)