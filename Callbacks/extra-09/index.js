const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];
//Programadores com Idade Superior a 20
const program20 = pessoas.filter(x => x.idade > 20 && x.profissao == "Programador")
console.log(program20)
//Jornalistas com Idade Superior a 30
const jorna30 = pessoas.filter(x => x.idade > 30 && x.profissao == "Jornalista")
console.log(jorna30)
//Programadores e Jornalistas Jovens
const jornaprograjovens = pessoas.filter(x => x.idade <= 29)
console.log(jornaprograjovens)