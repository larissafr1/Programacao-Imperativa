// Função para jogar os números digitados na tela:
function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero + num;
}


// Função para limpar a tela:
function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

// Função para apagar os números individualmente:
function voltar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para fazer os cálculos:
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

// SOMA
function somar(num1, num2) {
    let valor1 = parseFloat(num1);
    let valor2 = parseFloat(num2);
    let soma = (valor1 + valor2);
    return soma;
}

// SUBTRAÇÃO
function subtrair(num1, num2) {
    let valor1 = parseFloat(num1);
    let valor2 = parseFloat(num2);
    let subtracao = (valor1 - valor2);
    return subtracao;
}

// DIVISÃO
function dividir(num1, num2) {
    let valor1 = parseFloat(num1);
    let valor2 = parseFloat(num2);
    let divisao = (valor1 / valor2);
    return divisao;
}

// MULTIPLICAÇÃO
function multiplicar(num1, num2) {
    let valor1 = parseFloat(num1);
    let valor2 = parseFloat(num2);
    let multiplicacao = (valor1 * valor2);
    return multiplicacao;
}