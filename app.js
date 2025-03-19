
let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    debugger;
  let nombre = document.getElementById("amigo").value;
  if (nombre === "") {
    alert("Tu amigo no tiene nombre, ingresa uno antes de continuar");
  } else {
    amigos.push(nombre);
    
    actualizarLista();
    document.getElementById("amigo").value = "";
  }
}

function actualizarLista(){
    debugger;
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        const amigo = amigos[index];
        lista.insertAdjacentHTML("afterbegin", "<li>" + amigo + "</li>");
    }

}


function sortearAmigo() {

    if (amigos.length > 0 ) {

        let numero = Math.floor(Math.random() * amigos.length);
        let amigo = amigos[numero];
       resultado.innerHTML = "<li> Tu amigo secreto es: "  + amigo + "</li>";

    } else{
        alert("No tienes amigos en la lista");
    }

}
