const libro = document.getElementById("libro");
const cambiar = document.getElementById("cambiar");
const verSeccion = document.getElementById("verSeccion");
const seccion = document.getElementById("seccion");

cambiar.addEventListener("click", function () {
    if (libro.getAttribute("title") === "Bibliotecario Rick") {
        libro.setAttribute("src", "imagenes/Morty.jpg");
        libro.setAttribute("title", "Bibliotecario Morty");
        libro.setAttribute("alt", "Bibliotecario Morty");
        libro.dataset.seccion = "Infantil";
    } else {
        libro.setAttribute("src", "imagenes/Rick.jpg");
        libro.setAttribute("title", "Bibliotecario Rick");
        libro.setAttribute("alt", "Bibliotecario Rick");
        libro.dataset.seccion = "Aventuras";
    }
});

verSeccion.addEventListener("click", function () {
    seccion.textContent = "Sección: " + libro.dataset.seccion;
});

const prestamo = document.getElementById("prestamo");
const cambiarPrestamo = document.getElementById("cambiarPrestamo");

cambiarPrestamo.addEventListener("click", function () {
    if (prestamo.textContent === "Préstamo inactivo") {
        prestamo.style.backgroundColor = "green";
        prestamo.style.color = "white";
        prestamo.textContent = "Préstamo activo";
    } else {
        prestamo.style.backgroundColor = "red";
        prestamo.style.color = "white";
        prestamo.textContent = "Préstamo inactivo";
    }
});
