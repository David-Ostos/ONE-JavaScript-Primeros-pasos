const ciudadDestino = "Venezuela";
const paisesDisponibles = ["Bogota", "Venezuela", "Panama","El salvador","Paris", "Alemania"];

let edadPasajero = 18;
let estaAcompanado = false;
let estaCasado = false;
let tienePassaporte = false;
    
    if(paisesDisponibles.indexOf(ciudadDestino) >=0 &&
    edadPasajero >= 18 && tienePassaporte && !estaCasado){
            console.log("Disponible el paquete para soltero");    
        }else{ 
            if((edadPasajero >=16) && ciudadDestino == "Venezuela" && estaCasado){
                console.log(`Disponible el pasaje para la venta porque va a ${ciudadDestino} y tiene ${edadPasajero} años`);
            }else{ 
                    console.log("No hay pasaje disponible")
            }
        }
    