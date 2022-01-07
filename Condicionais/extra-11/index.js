//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 200000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 61;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1700000;

if (rendaMensalEmCentavos>=200000 && totalJaPagoPeloAluno<1800000 && mesesDecorridos <60){
    const parcela= (0.18*rendaMensalEmCentavos)/100;
    console.log(`O  valor da parcela desse mês é de R$ ${parcela} reais`)
}
else{
    if(totalJaPagoPeloAluno==1800000){
        console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a o estudante já quitou todas as parcelas do curso")
    }
    else if ( rendaMensalEmCentavos< 200000){
        console.log ("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais")
    }
    else{
        console.log (`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois decorreram ${mesesDecorridos} meses desde o contrato`)
    }
}