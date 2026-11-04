let libros = 10;
let librosPrestados = 3;
let disponibles = libros - librosPrestados;

console.log("Libros disponibles:", disponibles);
console.log("Hay disponibilidad:", disponibles > 0);
console.log("Libros después de prestar uno:", disponibles += 1);
