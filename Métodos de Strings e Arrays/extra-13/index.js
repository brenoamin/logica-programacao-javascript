const nomeArquivo = 'Foto da Familia.pdf';

function validar(nomeArquivo) {
    let newArquivo = nomeArquivo;
    while (newArquivo.includes('.')) {
        newArquivo = newArquivo.replace(".", " ")
    }
    if (newArquivo.includes("png") || newArquivo.includes("jpeg") || newArquivo.includes("jpg") || newArquivo.includes("gif")) {
        console.log("Arquivo válido")
    }
    else {
        console.log("Arquivo inválido")
    }
}