const texto = "Aprenda programar do zero na Cubos Academy";
let newtexto = texto.toLowerCase();
while (newtexto.includes(" ")) {
    newtexto = newtexto.replace(" ", "-")
}
console.log(newtexto)