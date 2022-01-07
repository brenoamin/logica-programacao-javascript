const original = [1, 4, 12, 21, 53,88, 112];
const pares=[];
let n=0;
for (i=0;i<original.length;i++){
    if (original[i]%2==0){
        pares[n]=original[i]; 
        n++;
    }
}
console.log(pares)
