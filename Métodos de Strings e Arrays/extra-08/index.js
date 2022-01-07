const email = ".messias@cubos";

if (email.includes("@") && email.includes(".")) {
    if (email.indexOf(".") != 0 && email.lastIndexOf(".") != (email.length - 1)) {
        console.log("E-mail válido")
    }
    else {
        console.log("E-mail inválido")
    }
}
else {
    console.log("E-mail inválido")
}