// Arreglo para guardar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al arreglo
    amigos.push(nombre);

    // Limpiar el campo
    input.value = "";

    // Mostrar lista actualizada
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML =
        `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
