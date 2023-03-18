let jugador = 0
let pc =0

let wins=0;
let perdidas=0;

while(wins<3 && perdidas<3){
 // 1 es piedra, 2 es papel, 3 es tijera
jugador = prompt("Elige: 1=piedra, 2=papel y 3=tijera")
// alert("Elegiste " + jugador)
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
      let resultado;

      switch(true){
        case (jugada==1):
            resultado = "Piedra 🪨"
            break;
        case (jugada==2):
            resultado = "Papel 📃"
            break;
        case (jugada==3):
            resultado = "Tijera ✂️"
            break;
        default:"Opcion no encontrada"
      }
      return resultado;
}


let pc=aleatorio(1,3)

alert("PC elige " + eleccion(pc))
alert("Tú eliges " + eleccion(jugador))

// COMBATE


  switch(true){

    case (pc == jugador): 
        alert("EMPATE");

    break;

    case (jugador == 1 && pc == 3)||(jugador == 2 && pc == 1)||(jugador == 3 && pc == 2):
        alert("GANASTE")
         wins++;
         break;
    
    default:    
    alert("PERDISTE")
    perdidas++;
  }
  

}

alert("Ganaste  " +wins +" veces y perdiste  "+ perdidas+ "veces")