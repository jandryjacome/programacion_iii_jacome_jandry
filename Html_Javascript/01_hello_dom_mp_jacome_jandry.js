const titulo = document.getElementById("titulo");
titulo.textContent = "Catálogo de la biblioteca";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonportal");
boton.addEventListener("click", function () {
    estado.textContent = "CATÁLOGO ABIERTO";
    alert("El catálogo está disponible");
});

const mensaje = document.getElementById("mensaje");
const listo = document.getElementById("listo");
listo.addEventListener("click", function () {
    mensaje.textContent = "¡Disfruta tu lectura!";
    alert("Lectura lista");
});

let libros = 0;
const contador = document.getElementById("contador");
const nuevoLibro = document.getElementById("nuevoViaje");
nuevoLibro.addEventListener("click", function () {
    libros += 1;
    contador.textContent = libros;
});
