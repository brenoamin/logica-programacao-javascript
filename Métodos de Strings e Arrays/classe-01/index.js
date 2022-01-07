const comentario = "Esse COVID é muito perigoso!";

let transform = comentario.toLowerCase();
if (transform.includes("covid") || transform.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras ofensivas")
}
else {
    console.log("Comentário autorizado")
}