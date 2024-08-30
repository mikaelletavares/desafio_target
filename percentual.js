const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o percentual de representação
function calcularPercentuais(faturamento) {
    // Calcula o valor total do faturamento
    let total = 0;
    for (let estado in faturamento) {
        total += faturamento[estado];
    }

    // Calcula o percentual de representação para cada estado
    let percentuais = {};
    for (let estado in faturamento) {
        let valor = faturamento[estado];
        let percentual = (valor / total) * 100;
        // Converte para string e limita a duas casas decimais com o toFixed
        percentual = percentual.toFixed(2);
        percentuais[estado] = percentual + '%';
    }

    return percentuais;
}

function percentual() {
    // Calcula os percentuais
    const percentuais = calcularPercentuais(faturamentoPorEstado);

    // Exibe os resultados
    console.log('\nPercentual de representação por estado:');
    for (let estado in percentuais) {
        console.log(estado + ': ' + percentuais[estado]);
    }
}

module.exports = percentual;
