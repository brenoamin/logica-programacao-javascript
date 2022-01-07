const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorString = cidades.reduce((acc, item) => acc.length > item.length ? acc : item)
console.log(maiorString)