for (let dia = 1; dia <= 5; dia++) {
    console.log("Día " + dia + " de préstamos");
}

let librosPrestados = [3, 5, 2, 7];
let total = 0;

for (let i = 0; i < librosPrestados.length; i++) {
    total += librosPrestados[i];
}

console.log("Total de préstamos:", total);
