//suporte a multiplos usuarios
var users = [
    {
        username: "admin",
        password: "teste"
    },
    {
        username: "guilherme",
        password: "teste2"
    }
]

function login(){
    //email e senha inputado pelo usuario
    var senha_input = document.getElementById("password").value;
    var usuario_input = document.getElementById("username").value;

    //loop para verificar se usuario e senhas digitados estão em users
    for(i=0; i < users.length; i++){
        if (usuario_input == users[i].username && senha_input == users[i].password){
            window.location.replace("./eventoLista.html");
            return;
        }
    }
    alert("Usuario e/ou senha errado(s).");
}