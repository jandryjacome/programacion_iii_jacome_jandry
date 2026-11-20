const catalogo = document.getElementById("energia");
const seccion = document.getElementById("dimension");
const prestamo = document.getElementById("portal");

catalogo.textContent = "Catálogo actualizado";
seccion.textContent = "Sección: literatura";
prestamo.textContent = "Préstamo: disponible";

const libroDestacado = document.querySelector(".personaje");
libroDestacado.textContent = "El principito - recomendado";

const primerTitulo = document.querySelector("h2");
primerTitulo.textContent = "Libros disponibles";

const seccionDestacada = document.querySelector("#universo");
seccionDestacada.textContent = "Sección infantil";

const estadoLibro = document.querySelector("#libro .estado");
estadoLibro.textContent = "Disponible para préstamo";

const secciones = document.querySelectorAll(".libros");
console.log(secciones);
console.log(secciones.length);

for (let i = 0; i < secciones.length; i++) {
    console.log(secciones[i].textContent);
}

secciones.forEach(function (seccion) {
    console.log(seccion.textContent);
});

for (let seccion of secciones) {
    console.log(seccion.textContent);
}
