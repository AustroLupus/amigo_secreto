// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = []
function agregarAmigo(){
    let nuevoNombre = document.getElementById("amigo").value;
    if (esNombre(nuevoNombre)) { // Validación si el campo está vacío ocurre en la función esNombre()
        arrayNombres.push(nuevoNombre);
        document.getElementById("amigo").value = ""; // limpia en campo input
        creaLi(nuevoNombre,"listaAmigos"); // Crear un elemento li y mostrar nombres en el listado
        document.getElementById("amigo").focus() // devuelve el foco al campo input
    } else {
        alert("Debe indicar un nombre");
    }
}

function esNombre(nombre){
    const regexNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚñÑ])[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //Solo letra mayúscula o minúscula o espacio, pero no vacío tampoco solo espacios
    return regexNombre.test(nombre);
}

function sortearAmigo(){
    if (arrayNombres.length > 0){ //verifica que el arreglo no esté vacío
        let indiceAleatorio = Math.floor(Math.random() * arrayNombres.length); // Elige número aleatorio ente 0 y largo del arreglo - 1
        creaLi(arrayNombres[indiceAleatorio],"resultado");
    } else {
        alert("Debe por lo menos tener un nombre en el listado");
    }

}

//Capturar usar enter para presionar el botón agregar amigo
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
})

// refactorizado función para crear elementos li
function creaLi(item,stringListado){ // item es lo que irá en la lista como variable, listado es el id del listado como string
    let tagLi = document.createElement("li");
    tagLi.textContent=item;
    document.getElementById(stringListado).appendChild(tagLi);
}