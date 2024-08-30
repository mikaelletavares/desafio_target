// Importa os módulos para cada funcionalidade
const soma = require('./soma');
const fibonacci = require('./fibonacci');
const faturamento = require('./faturamento/faturamento');
const percentual = require('./percentual');
const invertString = require('./invertString');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Retorna uma Promise para fazer perguntas ao usuário 
/* Promise é uma forma de lidar com operações que podem não ser concluídas instantaneamente, 
como requisições a um servidor, leitura de um arquivo, ou qualquer tarefa que leve tempo para ser realizada */
function perguntar(questao) {
    return new Promise((resolve) => {
        rl.question(questao, (resposta) => {
            resolve(resposta); // Resolve a Promise com a resposta do usuário
        });
    });
}

// Exibe o menu e processa as opções do usuário
async function exibirMenu() {
    while (true) { // Loop infinito para manter o menu rodando
        console.log('\nEscolha o código para rodar:');
        console.log('1. Soma');
        console.log('2. Fibonacci');
        console.log('3. Faturamento');
        console.log('4. Percentual');
        console.log('5. Inverter String');
        console.log('0. Sair');

        const opcao = await perguntar('Digite sua escolha: '); // Aguarda o usuário escolher uma opção

        switch (opcao) {
            case '1':
                soma(); // Chama a função soma
                break;
            case '2':
                await fibonacci(perguntar);  // Chama a função fibonacci 
                break;
            case '3':
                faturamento(); // Chama a função faturamento
                break;
            case '4':
                percentual(); // Chama a função percentual
                break;
            case '5':
                await invertString(perguntar);  // Chama a função invertString 
                break;
            case '0':
                console.log('\nSaindo... \nAté a próxima! :D\n');
                rl.close(); 
                return; // Sai da função exibirMenu
            default:
                console.log('Opção inválida. Tente novamente.\n'); 
                break;
        }

        // Pergunta se o usuário deseja continuar rodando outros códigos
        const continuar = await perguntar('\nGostaria de rodar um novo código? (s/n): ');
        if (continuar.toLowerCase() !== 's') { // Verifica se a resposta não é 's'
            console.log('\nSaindo... \nAté a próxima! :D\n');
            rl.close(); 
            return;
        }
    }
}

// Inicia o menu principal
exibirMenu();
