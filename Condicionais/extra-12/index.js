const diaDaSemana = 10;

dias=["Segunda Feira","Terça Feira", "Quarta Feira", "Quinta Feira", "Sexta Feira","Sábado","Domingo"];
if(diaDaSemana<1|| diaDaSemana>7){
    console.log("O dia da semana informado não é válido.")
}
else{
console.log(dias[diaDaSemana-1]);
}
