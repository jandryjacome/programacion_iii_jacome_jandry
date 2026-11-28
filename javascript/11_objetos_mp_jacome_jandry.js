let libro = {
    titulo: "La biblioteca perdida",
    autor: "Jandry Jacome",
    paginas: 250,
    disponible: true
};

console.log(libro);
console.log(libro.titulo);
console.log(libro["autor"]);

libro.disponible = false;
console.log("Disponible:", libro.disponible);

delete libro.paginas;
console.log(libro);
