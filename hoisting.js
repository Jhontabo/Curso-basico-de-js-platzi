//El hosting en las variables es cuando estas son definidas despues de un console log o 
//despues de que se inicialice una funcion, por ello se debe de cononcer como es que se ejecuta
//o se le el codigo de js va de arriba para abajo 

//Ejemplo 

console.log( miNombre);

var miNombre="Jhon"

//______________________________________________________________//

//Hoisting en funciones en js 
//En js las funciones deben de ser inicializadas arriba del todo por lo que aqui no hay
//problema el problema radica en que las variables son movidas arriba del todo mas no su valor 
//por ello se deben inicializar antes de usarse

function hey() {
    console.log("hola " + miNombre);
}

var miNombre = "Francisco";
