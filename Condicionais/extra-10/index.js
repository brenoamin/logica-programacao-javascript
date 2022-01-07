const caractere = "e";
Vogal = ["A", "E", "I", "O", "U"]
Número = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


if ((Vogal.indexOf(caractere.toUpperCase()) != -1)) {
    if (Vogal.indexOf(caractere) != -1) {
        console.log("Vogal maiúscula")
    }
    else {
        console.log("Vogal minúscula")
    }

}
else if ((Número.indexOf(caractere) != -1)) {
    console.log("É um número")
}
else {
    console.log("É uma consoante")
}