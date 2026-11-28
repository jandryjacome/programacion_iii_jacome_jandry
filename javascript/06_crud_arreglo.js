let libros = ["El principito", "Don Quijote"];

console.log("Libros iniciales:", libros);

libros.push("La isla del tesoro");
console.log("Agregar un libro:", libros);

console.log("Leer el primer libro:", libros[0]);

libros[1] = "Alicia en el pais de las maravillas";
console.log("Actualizar el segundo libro:", libros);

libros.splice(0, 1);
console.log("Eliminar el primer libro:", libros);
