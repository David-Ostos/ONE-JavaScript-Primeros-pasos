const paisesDisponibles = [ "Alemania","Paris","Venezuela","El salvador", "Panama","Bogota"];
const precioCiudades = [1200,1000,500,400,300,200];
const presupuestoDisponible = 200

let i = 0; // se declara la variable "i" para que tenga el marcador y se valla aumentando para poder saber cual es el nuemro del arrays qeu se necesita para tener el nuemro deseado.

while(precioCiudades[i]>presupuestoDisponible && i < paisesDisponibles.length){
    i++;
}
if(i == paisesDisponibles.length){
    console.log(`No hay pasaje igual o menor a ${presupuestoDisponible}$`)
}else{
console.log(`Puedes comprar pasaje para: ${paisesDisponibles[i]}, tiene un costo de ${precioCiudades[i]}$.`)}