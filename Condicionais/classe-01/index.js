const jogada1 = "pedra"
const jogada2 = "tesoura"

if(jogada1=="pedra"){
    if(jogada2=="tesoura"){
      console.log("pedra")
    }
    else if(jogada2=="papel"){
      console.log("papel")
    }
    else {
      console.log("empate")
    }
  }
  if(jogada1=="papel"){
    if(jogada2=="pedra"){
      console.log("papel")
    }
    else if(jogada2=="tesoura"){
      console.log("tesoura")
    }
    else {
      console.log("empate")
    }
  }
  if(jogada1=="tesoura"){
    if(jogada2=="papel"){
      console.log("tesoura")
    }
    else if(jogada2=="pedra"){
      console.log("pedra")
    }
    else {
      console.log("empate")
    }
  }