# amigo_secreto
## Introducción
Esta aplicación toma los nombres ingresados, los presenta en una lista y provee la funcionalidad de elegir uno al azar.\
Para la creación del código, se indicaron las siguientes restricciones:
- Validar que el campo de ingresar nombre no esté vacío al presionar el botón **Adicionar**.
- Validar que el listado no esté vacío al presionar **Sortear Amigo**.

## Funcionalidades adicionales
Para mejorar la experiencia de usuario, se agregaron las siguientes funcionalidades para hacer el uso más intuitivo:
- El foco vuelve al campo ``input`` después de presionar **Adicionar**.
- Se detecta las pulsaciones de ``enter`` para realizar la función del clic en **Adicionar**.

## Validación mediante RegEx
Una particularidad de este código se encuentra en la función ``esNombre()`` que valida si lo ingresado es un nombre o no.\
Se toma ventaja del test mediante RegEx que devuelve ``true`` en caso de que se cumpla con el requerimiento y ``false`` en caso contrario.
```javascript
function esNombre(nombre){
    const regexNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚñÑ])[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regexNombre.test(nombre);
}
```
En su primera sección, RegEx verifica que la cadena ingresada tenga por lo menos un PDTE CONTINUAR