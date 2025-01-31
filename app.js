// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = []
function agregarAmigo(){
    let nuevoNombre = document.getElementById("amigo").value;
    console.log("Nuevo Nombre: " + nuevoNombre);
    arrayNombres.push(nuevoNombre);
    document.getElementById("amigo").value = "";
    console.log(arrayNombres);
    // Mostrando nombres en el listado
    let li = document.createElement("li");
    li.textContent=nuevoNombre;
    document.getElementById("listaAmigos").appendChild(li);
}

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * arrayNombres.length);
    console.log(indiceAleatorio);
    console.log(arrayNombres[indiceAleatorio]);
}