const letras = ["A", "a", "B", "C", "E", "e"];
soma=0;
let encontrado= false;
for (i=0; i<letras.length;i++){
    let countl=letras[i];
    if(countl==="E" || countl==="e"){
        soma++;
        encontrado=true;
    }
}
if(!encontrado){
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
}
else{
    console.log(`Foram encontradas ${soma} letras "E" ou "e"`)
}
