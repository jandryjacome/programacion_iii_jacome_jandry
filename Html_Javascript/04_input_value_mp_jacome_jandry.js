const cantidad = document.getElementById("cantidad");
const paginas = document.getElementById("paginas");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function () {
    if (cantidad.value.trim() === "" || paginas.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidadLibros = Number(cantidad.value);
    const paginasPorLibro = Number(paginas.value);
    if (!Number.isFinite(cantidadLibros) || !Number.isFinite(paginasPorLibro)) {
        resultado.textContent = "Ingresa valores válidos";
        return;
    }

    resultado.textContent =
        "Páginas totales: " + cantidadLibros * paginasPorLibro;
});
