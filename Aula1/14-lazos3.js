const presupuestoDisponible = 1000;
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

let ciudadSeleccionada = "";
let precioSeleccionado = "";

for (let i = 0; i < datos.length && ciudadSeleccionada == ""; i++) {
    
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        precioSeleccionado = datos[i].precio;

    }
}

if(ciudadSeleccionada == "")
    console.log(`No hay pasaje igual o menor a ${presupuestoDisponible}`);
else
console.log(`Puedes comprar pasaje para ${ciudadSeleccionada} y el precio es de ${precioSeleccionado}$`);
 