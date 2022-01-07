const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let acertos = 0;
    for (i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta == prova.questoes[i].correta) {
            acertos++;
        }
    }
    console.log(`O aluno ${prova.aluno} acertou ${acertos}questões e obteve nota ${prova.valor * acertos / prova.questoes.length} `)
}
corrigirProva(prova)

