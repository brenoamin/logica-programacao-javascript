const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const namesA=[];
let n=0;
for (let item of nomes){
    if(item[0]== "A" || item[0]=="a"){
        namesA[n]=item; 
        n++;
    }
}
console.log(namesA)
