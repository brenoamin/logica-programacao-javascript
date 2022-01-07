const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        const deposito = {
            tipo: "Depósito",
            valor: valor,
        }
        this.historicos.push(deposito)
        return `Deposito de R$${(valor / 100)} realizado para o cliente: ${this.nome}.`
    },
    sacar: function (valor2) {
        const saquear = {
            tipo: "Saque",
            valor: valor2,
        }
        let verdadeiro = false;
        if (this.saldo < valor2) {
            verdadeiro = true;
            return `Saldo insuficiente para o saque de: ${this.nome}`
        }
        if (!verdadeiro) {
            this.historicos.push(saquear)
            this.saldo -= valor2;
            return `Saque de R$${(valor2 / 100)} realizado para o cliente: ${this.nome}.`
        }
    },
    extrato: function () {
        hist = [];
        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo) / 100}`)
        console.log(`Histórico:`)
        for (i = 0; i < this.historicos.length; i++) {
            if (this.historicos[i].tipo === "Depósito") {
                hist += `Depósito de $${(this.historicos[i].valor / 100)}\n`
            }
            else {
                hist += `Saque de $${(this.historicos[i].valor / 100)}\n`
            }

        }
        return hist

    }
}
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());



