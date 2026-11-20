const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde la biblioteca";
saludo.innerHTML = "<strong>Bienvenido a nuestra biblioteca</strong>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
<h2>El principito</h2>
<p>Sección: literatura</p>
<p>Disponible para préstamo</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function () {
    saludar.textContent = "Lector: " + nombre.value;
});
