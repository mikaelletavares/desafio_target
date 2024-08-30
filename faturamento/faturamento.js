const fs = require('fs');
const path = require('path');

// Atualiza o caminho para o arquivo JSON e ajusta para o diretório correto
const filePath = path.join(__dirname, 'faturamento.json');

// Lê e processa o arquivo JSON anteriormente criado
function lerFaturamento() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Calcula o menor, maior valor e o número de dias acima da média relacionados ao faturamento do mês
function calcularFaturamento(faturamento) {
    // Cria uma lista apenas com valores positivos
    let valores = [];
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor > 0) {
            valores.push(faturamento[i].valor);
        }
    }

    // Se não existirem valores válidos retorna 0
    if (valores.length === 0) {
        return {
            menor: 0,
            maior: 0,
            diasAcimaDaMedia: 0
        };
    }

    // Encontra o menor e o maior valor
    let menor = valores[0];
    let maior = valores[0];
    for (let i = 1; i < valores.length; i++) {
        if (valores[i] < menor) {
            menor = valores[i];
        }
        if (valores[i] > maior) {
            maior = valores[i];
        }
    }

    // Calcula a média dos valores
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    let media = soma / valores.length;

    // Conta os dias com faturamento acima da média
    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor > media) {
            diasAcimaDaMedia++;
        }
    }

    // teste
    let mediaDoMes = soma / faturamento.length;

    // O toFixed(2) limita os valores depois do ., apenas 2 números decimais serão exibidos
    return {
        menor: menor.toFixed(2),
        maior: maior.toFixed(2),
        diasAcimaDaMedia,
        mediaDoMes: mediaDoMes.toFixed(2)
    };
}

function faturamento() {
    // Lê o arquivo e calcula os resultados
    const faturamentoData = lerFaturamento();
    const resultados = calcularFaturamento(faturamentoData.faturamento);

    // Exibe os resultados
    console.log('\nMenor valor faturado do mês: R$' + resultados.menor);
    console.log('Maior valor faturado do mês: R$' + resultados.maior);
    console.log('Número de dias com faturamento acima da média: ' + resultados.diasAcimaDaMedia);
    // Bônus
    console.log('Média de faturamento mensal: R$' + resultados.mediaDoMes);
}

module.exports = faturamento;
