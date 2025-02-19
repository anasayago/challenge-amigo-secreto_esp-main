let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo(){
    var texto = document.getElementById("amigo").value;
    if (texto.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(texto);
        mostrarAmigos()
        document.getElementById("amigo").value = "";
    }
 }

 function mostrarAmigos(){
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
    }
 }