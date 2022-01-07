const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`
        Cliente: ${this.nomeDoCliente}
        Total de itens: ${this.calcularTotalDeItens()} itens
        Total a pagar: R$ ${this.calcularTotalAPagar.toFixed(2)}`)
    },
    addProduto: function (produto) {
        let igual = false;
        for (i = 0; i < this.produtos.length; i++) {
            if (produto.id == this.produtos[i].id) {
                this.produtos[i].qtd += produto.qtd;
                igual = true;
            }
        }
        if (!igual) {
            this.produtos.push(produto)
        }
    },
    calcularTotalAPagar: function () {
        let total = 0;
        for (i = 0; i < this.produtos.length; i++) {
            total += (this.produtos[i].qtd * this.produtos[i].precoUnit) / 100;
        }
        return total;
    },
    calcularTotalDeItens: function () {
        let qtdad = 0;
        for (i = 0; i < this.produtos.length; i++) {
            qtdad += this.produtos[i].qtd
        }
        return qtdad;
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n `)
        for (i = 0; i < this.produtos.length; i++) {
            console.log(
                `Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].qtd * this.produtos[i].precoUnit.toFixed(2)) / 100} `)
        }
        console.log(`
Total de itens: ${this.calcularTotalDeItens()} itens
Total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)} `)
    },
    calcularDesconto: function () {
        let menorValor = Number.POSITIVE_INFINITY;
        let menorValor2 = Number.POSITIVE_INFINITY;
        let desconto = 0;
        if (this.calcularTotalDeItens() > 4) {
            for (let i = 0; i < this.produtos.length; i++) {
                if (this.produtos[i].precoUnit < menorValor)
                    menorValor = (this.produtos[i].precoUnit) / 100;
            }
        }
        if (this.calcularTotalAPagar() > 100) {
            menorValor2 = 0.1 * carrinho.calcularTotalAPagar()
        }
        if (menorValor > menorValor2) {
            desconto = menorValor;
        }
        else {
            desconto = menorValor2;
        }
        return desconto;
    }
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.imprimirDetalhes();
console.log(`O desconto dessa compra é de R$ ${carrinho.calcularDesconto().toFixed(2)}`);
carrinho.addProduto(novoTenis);
carrinho.addProduto(novaBermuda);
carrinho.imprimirDetalhes();
console.log(`O desconto dessa compra é de R$ ${carrinho.calcularDesconto().toFixed(2)}`);