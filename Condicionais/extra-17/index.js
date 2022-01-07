//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const ValorDasParcelas =valorDoProduto/(100* quantidadeDoParcelamento);

const qtadeParcelasPagas=valorPago/ValorDasParcelas

const parcelasRestantes = quantidadeDoParcelamento - qtadeParcelasPagas

console.log(`Restam ${parcelasRestantes} parcelas de R$${ValorDasParcelas}`)