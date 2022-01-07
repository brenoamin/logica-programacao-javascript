const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let pares=0;
for (i=0;i<numeros.length;i++){
    if (numeros[i]%2==0){
        pares+=numeros[i]; 
    }
}
console.log(pares)

