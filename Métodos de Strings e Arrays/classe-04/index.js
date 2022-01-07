let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

//Identificador
if (identificador.length < 6) {
    identificador = identificador.padStart(6, "0")
}
console.log(identificador)

//Nome
nome = nome.split("")
for (i = 0; i < nome.length; i++) {
    if (nome[i] == " ") {
        nome[i + 1] = nome[i + 1].toUpperCase();
    }
}
let formatnome = "";
for (let nomes of nome) {
    formatnome += nomes;
}
nome = formatnome;
console.log(nome);

//Email
email = email.trim()
console.log(email)

//Tags
tags = tags.join(", ")
console.log(tags)

