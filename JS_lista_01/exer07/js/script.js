alert('digite três valores numéricos diferentes, para formar a cor em RGB.\nCada valor deverá estar dentro do intervalo [0,255]')

valorR = parseInt(prompt('Insira o primeiro valor de "R"'));
while (isNaN(valorR) || valorR < 0 || valorR > 255) {
    valorR = parseInt(prompt('Insira o primeiro valor de "R"', 200));
}


valorG = parseInt(prompt('Insira o primeiro valor de "G"'));
while (isNaN(valorG) || valorG < 0 || valorG > 255 || valorG==valorR) {
    valorG = parseInt(prompt('Insira o primeiro valor de "G"', 19));
}


valorB = parseInt(prompt('Insira o primeiro valor de "B"'));
while (isNaN(valorB) || valorB < 0 || valorB > 255 || valorB==valorR || valorB==valorG) {
    valorB = parseInt(prompt('Insira o primeiro valor de "B"', 150));
}
document.write(`<p style="color: rgb(${valorR},${valorG},${valorB});"> Fundamentos de Web Desing II</p>`)
