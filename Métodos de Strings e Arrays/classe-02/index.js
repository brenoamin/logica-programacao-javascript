const cpf = "12345678900";
const cnpj = "12345678900";
function CPF(cpf) {
    let newCpf = cpf.split("");

    if (cpf.length < 11) {
        console.log("CPF Inválido")
    }
    else {
        newCpf.splice("3", 0, ".")
        newCpf.splice("7", 0, ".")
        newCpf.splice("11", 0, "-")
        let formatCpf = ""
        for (let symbol of newCpf) {
            formatCpf += symbol;
        }
        console.log(formatCpf)
    }

}
function CNPJ(cnpj) {
    let newCnpj = cnpj.split("");

    if (cnpj.length < 14) {
        console.log("CNPJ Inválido")
    }
    else {
        newCnpj.splice("2", 0, ".")
        newCnpj.splice("6", 0, ".")
        newCnpj.splice("10", 0, "/")
        newCnpj.splice("15", 0, "-")
        let formatCnpj = ""
        for (let symbol of newCnpj) {
            formatCnpj += symbol;
        }
        console.log(formatCnpj)
    }
}
CPF(cpf);
CNPJ("12345678000199")
