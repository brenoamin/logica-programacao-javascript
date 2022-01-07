const original = [5, 7, 13, 17, 26, 34, 118, 245];
const novos=[];
let n=0;
for (i=0;i<original.length;i++){
    if ((original[i]>10 && original[i]<20) || original[i]>100){
        novos[n]=original[i]; 
        n++;
    }
}
console.log(novos)


