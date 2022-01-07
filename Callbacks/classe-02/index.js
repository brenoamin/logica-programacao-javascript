const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];
const endcep = 00111222
function cepRua(endcep) {
    const localiza = endereços.find((x) => endcep === x.cep)
    console.log(localiza.rua)
}
cepRua(endcep)