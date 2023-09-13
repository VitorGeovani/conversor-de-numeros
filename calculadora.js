function convert() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    const conversionType = document.getElementById('conversionType').value;
    let result = '';

    switch (conversionType) {
        case 'decimalToBinary':
            result = decimalParaBinario(inputNumber);
            break;
        case 'decimalToOctal':
            result = decimalParaOctal(inputNumber);
            break;
        case 'decimalToHexadecimal':
            result = decimalParaHexadecimal(inputNumber);
            break;
        case 'binaryToDecimal':
            result = binarioParaDecimal(inputNumber);
            break;
        case 'binaryToOctal':
            result = binarioParaOctal(inputNumber);
            break;
        case 'binaryToHexadecimal':
            result = binarioParaHexadecimal(inputNumber);
            break;
        case 'octalToDecimal':
            result = octalParaDecimal(inputNumber);
            break;
        case 'octalToBinary':
            result = octalParaBinario(inputNumber);
            break;
        case 'octalToHexadecimal':
            result = octalParaHexadecimal(inputNumber);
            break;
        case 'hexadecimalToDecimal':
            result = hexadecimalParaDecimal(inputNumber);
            break;
        case 'hexadecimalToBinary':
            result = hexadecimalParaBinario(inputNumber);
            break;
        case 'hexadecimalToOctal':
            result = hexadecimalParaOctal(inputNumber);
            break;
        default:
            result = 'Conversão não suportada';
    }

    document.getElementById('result').textContent = result;
}

document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.getElementById("clear-button");
    const resultElement = document.getElementById("result");

    clearButton.addEventListener("click", function () {
        resultElement.textContent = ""; 
    });
});


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function decimalParaBinario(decimal) {
    return decimal.toString(2);
}

function decimalParaOctal(decimal) {
    return decimal.toString(8);
}

function decimalParaHexadecimal(decimal) {
    return decimal.toString(16);
}

function binarioParaDecimal(binario) {
    return parseInt(binario, 2);
}

function binarioParaOctal(binario) {
    const decimal = binarioParaDecimal(binario);
    return decimalParaOctal(decimal);
}

function binarioParaHexadecimal(binario) {
    const decimal = binarioParaDecimal(binario);
    return decimalParaHexadecimal(decimal);
}

function octalParaDecimal(octal) {
    return parseInt(octal, 8);
}

function octalParaBinario(octal) {
    const decimal = octalParaDecimal(octal);
    return decimalParaBinario(decimal);
}

function octalParaHexadecimal(octal) {
    const decimal = octalParaDecimal(octal);
    return decimalParaHexadecimal(decimal);
}

function hexadecimalParaDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
}

function hexadecimalParaBinario(hexadecimal) {
    const decimal = hexadecimalParaDecimal(hexadecimal);
    return decimalParaBinario(decimal);
}

function hexadecimalParaOctal(hexadecimal) {
    const decimal = hexadecimalParaDecimal(hexadecimal);
    return decimalParaOctal(decimal);
}

function main() {
    console.log("Escolha uma opção:");
    console.log("1 - Decimal para Binário");
    console.log("2 - Decimal para Octal");
    console.log("3 - Decimal para Hexadecimal");
    console.log("4 - Binário para Decimal");
    console.log("5 - Binário para Octal");
    console.log("6 - Binário para Hexadecimal");
    console.log("7 - Octal para Decimal");
    console.log("8 - Octal para Binário");
    console.log("9 - Octal para Hexadecimal");
    console.log("10 - Hexadecimal para Decimal");
    console.log("11 - Hexadecimal para Binário");
    console.log("12 - Hexadecimal para Octal");
    console.log("0 - Sair");

    rl.question("Opção: ", function (opcao) {
        switch (parseInt(opcao)) {
            case 1:
                rl.question("Digite o número decimal: ", function (decimal) {
                    console.log("O número binário é: " + decimalParaBinario(parseInt(decimal)));
                    main();
                });
                break;
            case 2:
                rl.question("Digite o número decimal: ", function (decimal) {
                    console.log("O número octal é: " + decimalParaOctal(parseInt(decimal)));
                    main();
                });
                break;
            case 3:
                rl.question("Digite o número decimal: ", function (decimal) {
                    console.log("O número hexadecimal é: " + decimalParaHexadecimal(parseInt(decimal)));
                    main();
                });
                break;
            case 4:
                rl.question("Digite o número binário: ", function (binario) {
                    console.log("O número decimal é: " + binarioParaDecimal(binario));
                    main();
                });
                break;
            case 5:
                rl.question("Digite o número binário: ", function (binario) {
                    console.log("O número octal é: " + binarioParaOctal(binario));
                    main();
                });
                break;
            case 6:
                rl.question("Digite o número binário: ", function (binario) {
                    console.log("O número hexadecimal é: " + binarioParaHexadecimal(binario));
                    main();
                });
                break;
            case 7:
                rl.question("Digite o número octal: ", function (octal) {
                    console.log("O número decimal é: " + octalParaDecimal(octal));
                    main();
                });
                break;
            case 8:
                rl.question("Digite o número octal: ", function (octal) {
                    console.log("O número binário é: " + octalParaBinario(octal));
                    main();
                });
                break;
            case 9:
                rl.question("Digite o número octal: ", function (octal) {
                    console.log("O número hexadecimal é: " + octalParaHexadecimal(octal));
                    main();
                });
                break;
            case 10:
                rl.question("Digite o número hexadecimal: ", function (hexadecimal) {
                    console.log("O número decimal é: " + hexadecimalParaDecimal(hexadecimal));
                    main();
                });
                break;
            case 11:
                rl.question("Digite o número hexadecimal: ", function (hexadecimal) {
                    console.log("O número binário é: " + hexadecimalParaBinario(hexadecimal));
                    main();
                });
                break;
            case 12:
                rl.question("Digite o número hexadecimal: ", function (hexadecimal) {
                    console.log("O número octal é: " + hexadecimalParaOctal(hexadecimal));
                    main();
                });
                break;
            case 0:
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                main();
                break;
        }
    });
}

main();