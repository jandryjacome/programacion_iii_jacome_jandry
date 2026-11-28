let libros = [
    "La biblioteca perdida",
    "Historia de la ciencia",
    "Programación práctica",
    "Poemas para leer"
];

for (let i = 0; i < libros.length; i++) {
    console.log(libros[i]);
}

for (let libro of libros) {
    console.log("Libro disponible:", libro);
}
