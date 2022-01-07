const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const itensProib = palavras.some(x => x == "cerveja" || x == "vodka")

console.log(itensProib ? "revise sua lista, joão. possui bebida com venda proibida!" : "tudo certo, vamos as compras!")