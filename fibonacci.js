function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0;
    let b = 1;

    if (num === a || num === b) return true;

    while (b < num) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b === num;
}

async function fibonacci(perguntar) {
    const input = await perguntar('\nInforme um número: ');
    const numberToCheck = parseInt(input.trim(), 10);

    if (isNaN(numberToCheck)) {
        console.log('Por favor, insira um número válido.');
    } else if (isFibonacci(numberToCheck)) {
        console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
    }
}

module.exports = fibonacci;
