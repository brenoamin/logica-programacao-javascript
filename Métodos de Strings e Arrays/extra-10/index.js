const cpf = "011.022.033-44";
let newnumber = cpf;
while (newnumber.includes('.') || newnumber.includes("-") || newnumber.includes("/")) {
    newnumber = newnumber.replace(".", "")
    newnumber = newnumber.replace("-", "")
    newnumber = newnumber.replace("/", "")
}
console.log(newnumber)