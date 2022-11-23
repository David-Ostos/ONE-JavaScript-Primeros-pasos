const paisesDisponibles = [ "Alemania","Paris","Venezuela","El salvador", "Panama","Bogota"];
const precioCiudades = [1200,1000,500,400,300,200];
const presupuestoDisponible = 450;
const datos = [
    {
        "ciudad":"Alemania",
        "precio": 1200
    },
    {
        "ciudad":"Paris",
        "precio": 1000
    },
    {
        "ciudad":"Venezuela",
        "precio": 500
    },
    {
        "ciudad":"El salvador",
        "precio": 400
    },

    {
        "ciudad":"Panama",
        "precio": 300
    },
    {
        "ciudad":"bogota",
        "precio": 200
    }    
];

let i = 0; 

while(i < datos.length && datos[i].precio >= presupuestoDisponible){
    i++;
}
if(i == datos.length){
    console.log(`No hay pasaje igual o menor a ${presupuestoDisponible}$`)
}else{
console.log(`Puedes comprar pasaje para: ${datos[i].ciudad}, tiene un costo de ${datos[i].precio}$.`)}
 
