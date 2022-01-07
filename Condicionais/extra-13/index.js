//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento=="credito"){
    const ValorComDesconto=(0.95*valorDoProduto)/100;
    console.log(`Valor a ser pago: ${ValorComDesconto.toFixed(2)}`)
}
else if(tipoDePagamento=="cheque"){
    const ValorComDesconto=(0.97*valorDoProduto)/100;
    console.log(`Valor a ser pago:${ValorComDesconto.toFixed(2)}`)
}
else{
    const ValorComDesconto=(0.9*valorDoProduto)/100;
    console.log(`Valor a ser pago:${ValorComDesconto.toFixed(2)}`)
}
