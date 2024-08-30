function inverterString(str) {
    let resultado = '';

    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

async function invertString(perguntar) {
    const entrada = await perguntar('\nDigite a String (frase/palavra) que deseja inverter: ');
    const stringInvertida = inverterString(entrada);

    console.log('String (frase/palavra) original: ' + entrada);
    console.log('String (frase/palavra) invertida: ' + stringInvertida);
}

module.exports = invertString;
