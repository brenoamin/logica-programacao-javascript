const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cities8 = cidades.filter(x => x.length <= 8)
console.log(cities8.join(", "))