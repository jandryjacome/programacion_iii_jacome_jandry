let librosDisponibles = 3;

if (librosDisponibles > 0) {
    console.log("El libro está disponible");
} else {
    console.log("El libro está prestado");
}

let diasRetraso = 5;
if (diasRetraso === 0) {
    console.log("No hay multa");
} else if (diasRetraso <= 3) {
    console.log("Multa baja");
} else {
    console.log("Multa alta");
}
