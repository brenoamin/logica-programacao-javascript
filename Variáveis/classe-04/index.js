const C=1000, i=12.5, t=5, d=1+i/100
//Cálculo do valor do montante
let M =C*Math.pow(d,t)

console.log (`O valor montante após ${t} meses no sistema de juros compostos sob uma taxa mensal fixa de ${i}% é de: ${M}`)
