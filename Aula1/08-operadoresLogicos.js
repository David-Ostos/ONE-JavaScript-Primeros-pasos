// operadores de comparacion

const ciudadDestino = "Caracas";
const paisesDisponibles = ["Bogota", "venezuela", "panama","El salvador","paris", "alemania"];

//Palabra reservada if 
//evalua una condicion 
if(paisesDisponibles.indexOf(ciudadDestino) >=0){
    console.log("Disponible el pasaje para la venta");    
}else
    {
        console.log("No hay pasaje disponible")
    }