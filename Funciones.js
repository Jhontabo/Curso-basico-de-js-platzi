/* Existen   varios tipos de funciones entre ellos estan las funciones
 declarativas y las de expresion */

//Declarativas 

function miFunction (name){
    console.log(`Hola ${name}`);
}


miFuction("Jhon")


//De expresion o anonimas  

var miFunctionNew = function(name){
    console.log(`Hola ${name} ¿como estas ?`);
}


miFunctionNew("Juan")
