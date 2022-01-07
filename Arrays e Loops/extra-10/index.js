const numeros =[8,11,4,1]
let maior=numeros[0];
let menor=numeros[0];

for(i=0;i<numeros.length;i++){
    if(numeros[i]>maior){
        maior=numeros[i]
    }
}
for (i=0;i<numeros.length;i++){
    if(numeros[i]<menor){
        menor=numeros[i]
    }
}
let dife = (maior-menor);
console.log(dife)