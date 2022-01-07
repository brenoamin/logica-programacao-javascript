const nome = 'Guido Cerqueira';
function nickNamen(nome) {
    let nickname = nome.toLowerCase()
    while (nickname.includes(" ")) {
        nickname = nickname.replace(" ", "")
    }
    nickname = nickname.split("")
    nickname.splice(0, 0, "@")
    if (nickname.length < 14) {
        nickname = nickname.toString()
        while (nickname.includes(',')) {
            nickname = nickname.replace(",", "")
        }
        console.log(nickname)
    }
    else {
        nickname = nickname.toString()
        while (nickname.includes(',')) {
            nickname = nickname.replace(",", "")
        }
        nickname = nickname.substr(0, 13)
        console.log(nickname)
    }
}
nickNamen(nome)
