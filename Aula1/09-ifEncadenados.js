const ciudadDestino = "Venezuela";
const paisesDisponibles = ["Bogota", "Venezuela", "Panama","El salvador","Paris", "Alemania"];

let edadPasajero = 15;
let estaAcompanado = false;

    
    if(paisesDisponibles.indexOf(ciudadDestino) >=0){{
        if(edadPasajero >= 18 || estaAcompanado){ /*con indexOF se puede verificar los datos del elemento y asi poder utilizarlo para las condicionales*/

    console.log("Disponible el pasaje para la venta");    
}
}else{ 
    if((edadPasajero >=16) && ciudadDestino == "Venezuela"){

        console.log("Disponible el pasaje para la venta");
    
    }else{ console.log("No hay pasaje disponible")}
       
    }
}