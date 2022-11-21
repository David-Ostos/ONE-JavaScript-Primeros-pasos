const ciudadesDisponibles = new Array("Bogota", "lima", "Santiago");
console.log(ciudadesDisponibles);


const paisesDisponibles = ["colombia", "venezuela", "panama"];
console.log (paisesDisponibles);

// push se utiliza para agregar un nuevo arrays al final 
{
    paisesDisponibles.push("Uruguay");
    ciudadesDisponibles.push("Montevideo");

    console.log(ciudadesDisponibles);
    console.log (paisesDisponibles);
    
}

// unshift se utiliza para poder agregar un nuevo arays al principio
{
    paisesDisponibles.unshift("El salvador");
    ciudadesDisponibles.unshift("Guatemala");

    console.log(ciudadesDisponibles);
    console.log (paisesDisponibles);
    
}

console.log(paisesDisponibles[0]);

//quitando y modificando 

paisesDisponibles.splice(1,2,"china","paraguay")

console.log(paisesDisponibles);
