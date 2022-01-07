const numeros = [54, 22, 14, 87, 284];
let encontrado=false;
for (i=0;i<numeros.length;i++){
    let verf10=numeros[i];
    if (verf10===10){
        console.log (i);
        encontrado=true;
    }
}
if(!encontrado){
    console.log(-1)
}

