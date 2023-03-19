//Los bucles for son loops los cuales nos ayudan a repetir una tarea una cierta cantidad
// de veces siempre y cuando se cumpla una condicion

//Ejemplo de for normal

var frutas=["manzanas","peras","mangos","uvas"];

function nombreFrutas(fruta) {

    console.log(`Hola ${fruta}`);
    
}
// 
// for(var i=0;i<frutas.length;i++){

    // console.log(nombreFrutas(frutas[i]));
// }


//For of 


for (const fruta of frutas) {
    nombreFrutas(fruta);
}