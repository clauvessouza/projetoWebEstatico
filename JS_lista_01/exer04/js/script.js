nota1 = parseInt(prompt('Digite a nota do primeiro bimestre'));
while (nota1 == "" || nota1 == null || nota1 < 0) {
    nota1 = parseInt(prompt('Nota do primeiro bimestre está inválida. \n Por favor digite uma nota'));
}

nota2 = parseInt(prompt('Digite a nota do segundo bimestre'));
while (nota2 == "" || nota2 == null || nota2 < 0) {
    nota2 = parseInt(prompt('Nota do segundo bimestre está inválida. \n Por favor digite uma nota'));
}

totalnotas = nota1 + nota2;

if(totalnotas>= 60){
    alert( 'Você esta APROVADO');
}else{
    alert(` Você esta REPROVADO com a nota ${ totalnotas}, faltam ${60 - totalnotas} pontos`);
}
