const ciudadesDisponibles = new Array("Bogota", "lima", "Santiago","canada", "usa");

const paisesDisponibles = ["colombia", "venezuela", "panama","El salvador","paris", "alemania"];
console.log(ciudadesDisponibles)
const cantidadDeCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadDeCiudades} elementos`)
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} elementos`)

//como quitar elementos del principio de la lista 

ciudadesDisponibles.shift();
console.log(ciudadesDisponibles)
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`)

//como quitar elemntos del final de la lista

ciudadesDisponibles.pop();
console.log(ciudadesDisponibles)
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`)

//filtro de elementos de la lista
let paisesFiltrados = paisesDisponibles.filter((e) => e == "venezuela");
console.log(paisesFiltrados);

// para filtrar por numero de letras
paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//unidicar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join(" - "));

//ordenar la lista
console.log(paisesDisponibles.sort());
console.log(ciudadesDisponibles.sort());

//conociendo la posicion de la lista
console.log(`venezuela esta en la posicion: ${paisesDisponibles.indexOf("venezuela")}`);

//unificar dos listas
const lisPaisesyCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(`Esta es la lista de todos los paises disponibles: ${lisPaisesyCiudades.sort()}`);