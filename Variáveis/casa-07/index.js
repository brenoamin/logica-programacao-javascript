
let po=1000, x=4, t=100; p=0

//Cálculo de pessoas infectadas após 100 dias com nível de contágio 1 para 4, com 1000 pessoas infectadas, inicialmente.
p=po*Math.pow(x,t/7);

console.log(`O número de pessoas infectadas após ${t} dias é: ${p}`)

