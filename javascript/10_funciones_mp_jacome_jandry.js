function registrarPrestamo(libros, prestados) {
    return libros - prestados;
}

function mostrarLibro(titulo) {
    console.log("Libro seleccionado:", titulo);
}

let disponibles = registrarPrestamo(20, 3);
console.log("Libros disponibles:", disponibles);
mostrarLibro("La biblioteca perdida");
