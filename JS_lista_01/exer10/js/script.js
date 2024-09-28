nome = prompt("qual o seu  nome? " , "Claudio");

let total = parseInt(prompt("Quantas vezes você quer exibir seu nome?"));


//cor = prompt ("Qual a cor você quer ver o seu nome")

for (i=0 ; i<total; i++)
 
document.write(`<p> ${i+1} - ${nome}</p>`)
