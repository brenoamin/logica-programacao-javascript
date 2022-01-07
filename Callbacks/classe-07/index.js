const fs = require('fs');
const cubosAcademy = "Estou aprendendo JavaScript na Cubos Academy"
fs.writeFile('./newarchive.txt', cubosAcademy, () => {
    console.log("O seu arquivo foi escrito com sucesso!")
})