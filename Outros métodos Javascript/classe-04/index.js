const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const limite5 = palavras.some((x) => x.length > 5)

console.log(limite5 ? "existe palavra inválida" : "array validado")