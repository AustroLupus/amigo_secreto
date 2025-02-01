// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = []
function agregarAmigo(){
    let nuevoNombre = document.getElementById("amigo").value;
    if (esNombre(nuevoNombre)) {
        console.log("Nuevo Nombre: " + nuevoNombre);
        arrayNombres.push(nuevoNombre);
        document.getElementById("amigo").value = "";
        console.log(arrayNombres);
        // Mostrando nombres en el listado
        let li = document.createElement("li");
        li.textContent=nuevoNombre;
        document.getElementById("listaAmigos").appendChild(li);
    } else {
        alert("Debe indicar un nombre");
    }
}

function esNombre(nombre){
    const regexNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚñÑ])[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //Solo letra mayúscula o minúscula o espacio, pero no vacío tampoco solo espacios
    return regexNombre.test(nombre);
}

function sortearAmigo(){
    if (arrayNombres.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * arrayNombres.length);
        console.log(indiceAleatorio);
        console.log(arrayNombres[indiceAleatorio]);
        let li = document.createElement("li");
        li.textContent=arrayNombres[indiceAleatorio];
        document.getElementById("resultado").appendChild(li);
    } else {
        alert("Debe por lo menos indicar un nombre");
    }

}