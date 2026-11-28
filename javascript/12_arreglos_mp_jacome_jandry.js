let libros = ["La biblioteca perdida", "Historia de la ciencia", "Programación práctica"];

console.log(libros[0]);
console.log(libros.length);

libros.push("Poemas para leer");
libros[1] = "Historia universal";
console.log(libros);

libros.pop();
libros.shift();
console.log(libros);
