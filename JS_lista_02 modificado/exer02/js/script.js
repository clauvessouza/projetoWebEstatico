var cursos = ["Projeto Sistema Web MVC e SQL", "Algoritmos e Programação", "Programação Orientada a Objetos 1", "Fundamentos de Banco de Dados ", "JavaScript Básico"];
var codigos = ["P2", "AP", "POO1", "FBD", "JSB"]


document.write("<table border='2'>");

document.write("<tr>");
document.write("<th>Código</th>");
document.write("<th>Disciplina</th>");
document.write("</tr>");


for (var i = 0; i < cursos.length; i++) {
    document.write("<tr><td>" + codigos[i] + "</td><td>" + cursos[i] + "</td></tr>");

}
 document.write("</table>");


