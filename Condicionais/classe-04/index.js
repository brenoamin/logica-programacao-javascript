const ladoA = 5;
const ladoB = 5;

if(ladoA===ladoB){
    if(ladoA===0){
        console.log("Branco")
    }
    else if(ladoA===1){
        console.log("Às")
    }
    else if(ladoA===2){
        console.log("Duque")
    }
    else if(ladoA===3){
        console.log("Terno")
    }
    else if(ladoA===4){
        console.log("Quadra")
    }
    else if(ladoA===5){
        console.log("Quina")
    }
    else if (ladoA===6){
        console.log("Sena")
    }
    else{
        console.log ("Não é uma pedra de dominó")
    }
}
else{
    console.log("Não é uma bucha")
}