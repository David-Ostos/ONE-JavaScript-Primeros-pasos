const ciudadDestino = "Paris";
const paisesDisponibles = ["Bogota", "Venezuela", "Panama","El salvador","Paris", "Alemania"];

let valorPasaje = 0;

console.log(`verificando pasaje para: ${ciudadDestino}`);

if(paisesDisponibles.indexOf(ciudadDestino) >=0){
    /*condicion con if
    if (ciudadDestino == "Venezuela"){
        valorPasaje = 500;
    }else if(ciudadDestino == "Bogota"){
        valorPasaje = 200;
    }else if(ciudadDestino == "Panama"){
        valorPasaje = 300;
    }else if(ciudadDestino == "El salvador"){
        valorPasaje = 400;
    }else if(ciudadDestino == "Alemania"){
        valorPasaje = 1200;
    }else if(ciudadDestino == "Paris"){
        valorPasaje = 1000;
    }*/
    switch(ciudadDestino){
        case "Bogota":
            valorPasaje = 200;
            break;
        case "Venezuela":
                valorPasaje = 500;
                break;
        case "Panama":
            valorPasaje = 300;
            break;
        case "El salvador":
            valorPasaje = 400;
            break;
        case "Alemania":
            valorPasaje = 1200;
        break;
            /*case "Paris":
            valorPasaje = 1000;
            break;*/
        default:
            valorPasaje = "Tarifa no disponible"
    }
    console.log(`El valor del pasaje es de: ${valorPasaje}`);
}else{ 
    console.log("No hay pasaje disponible");
}