expressao = prompt("Por favor, insira uma expressão (ex: ((5*8)-9) ou qualquer outra expressão):");
if(expressao){
    try {
        resultado = eval(expressao);
alert ('O resultado da expresao' + expressao + ' é: ' + resultado);

    }
    catch (erro){
        alert("Expressão inválida! Por favor , insira uma expressão válida")
    }

}