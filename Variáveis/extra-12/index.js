const M=90_000, C=60_000, n=24

//Cálculo da taxa de juros que foi operada sobre um financiamento a montate total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo decorrido do financiamento.
let i = Math.pow((M/C),1/n)-1
console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${i*100}%, pois após ${n} meses você teve que pagar ${M} reais.`)