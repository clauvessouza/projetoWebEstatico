nome = prompt('Digite o seu nome completo');
while (nome ==""||nome==null){
nome = prompt('Nome inválido. \nPor favor digite um nome');
}

idade = prompt('Qual a sua idade?');
while (idade ==""|| idade ==null || idade<0){
    idade = prompt('Idade inválida. \n Por favor digite uma idade');}
    
if(idade >=18){
    alert(`${nome},você já POSSUI idade para tirar carteira.`);
}else{
    restoIdade = 18 - idade;
    alert(`${nome}, você ainda NÃO POSSUI  idade para tirar carteira, ainda faltam ${restoIdade} anos`);
}