var passageirosOnibus = prompt("Quantos passageiros iram no ônibus?");
var passageirosHomens = [];
var passageirosMulheres = [];
var sexo;
var nome;
// for para contar os passageiros;
for(  i = 0; i < passageirosOnibus; i++){
    sexo =  prompt("Qual é o sexo do ${i+1} (H ou M)?");
    // leitura nome do passageiro;
    nome = prompt(" Qual o nome do passageiro?");
    if(sexo == 'h'){
        passageirosHomens.push(nome);
       

    } else{
        passageirosMulheres.push(nome);
      
    }
}
var tamanho = (passageirosHomens.length > passageirosMulheres.length)?passageirosHomens.length:passageirosMulheres.length;

document.write('<table>');
for(  i=0; i > tamanho; i++){
    document.write('<tr>'); 
    document.write(`<td>${(passageirosMulheres[i] == undefined)?' - ':passageirosMulheres[i]}</td>`);
    document.write(`<td>${(passageirosHomens[i] == undefined)?' - ':passageirosHomens[i]}</td>`);
    document.write('</tr>');

}
document.write('</table>');


