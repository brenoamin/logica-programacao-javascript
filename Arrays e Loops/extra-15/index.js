const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
let n=0;
let m=0;
for (i=0;i<original.length;i++){
    if(original[i]%2==0){
        pares[n]=original[i];
        n++
    }
    else{
        impares[m]=original[i];
        m++
    }
    
}
console.log(pares);
console.log(impares);

