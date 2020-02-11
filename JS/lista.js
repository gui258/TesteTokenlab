function adicionar(){
    //pegando todos os valores que o usuário adicionou
    var data = document.getElementById("date").value;
    var inicio = document.getElementById("startTime").value;
    var fim = document.getElementById("endTime").value;
    var description = document.getElementById("description").value;
    //variavel representando a lista
    var lista = document.getElementById("lista").innerHTML;

    //criando uma nova linha para a lista dentro da variavel lista
    lista = lista +"<tr><td>"+data+"</td><td>"+inicio+"</td><td>"+fim+"</td><td>"+description+"</td></tr>";

    //adicionando a linha criada na variavel lista no html 
    document.getElementById("lista").innerHTML = lista;
}