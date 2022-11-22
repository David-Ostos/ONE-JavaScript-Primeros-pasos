// operadores de comparacion

const ciudadDestino = "Venezuela";
const paisesDisponibles = ["Bogota", "Venezuela", "Panama","El salvador","Paris", "Alemania"];

//Palabra reservada if 
//evalua una condicion 
console.log(paisesDisponibles.indexOf(ciudadDestino));

console.log(`Verificando pasaje para: ${ciudadDestino}`);
/*
if(paisesDisponibles.indexOf(ciudadDestino) >=0 && paisesDisponibles.indexOf(ciudadDestino) <= 4){ /*con indexOF se puede verificar los datos del elemento y asi poder utilizarlo para las condicionales

    console.log("Disponible el pasaje para la venta");    

}else
    {
        console.log("No hay pasaje disponible")
    }

*/
    //Operadores logicos
    //y(and) - o (or) -  no (not)
    //AND = && se debe complir las 2 condiciones 
    //OR = || se debe cumplir 1 condicion por lo menos 
    //NOT = ! noo se debe cumplir la condicion
    const edadPasajero = 19;

    if(edadPasajero >= 18 || estaAcompañado){
    if((paisesDisponibles.indexOf(ciudadDestino) >=0) && edadPasajero >= 18 ){ /*con indexOF se puede verificar los datos del elemento y asi poder utilizarlo para las condicionales*/

    console.log("Disponible el pasaje para la venta");    

}else
    {
        console.log("No hay pasaje disponible")
    }
}


