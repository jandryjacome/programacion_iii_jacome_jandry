const energia = document.getElementById("energia")
const dimension = document.getElementById("dimension")
const portal = document.getElementById("portal")

energia.textContent="energia:100"
energia.textContent="dimension:c-137"
energia.textContent="portal:activado"

//seleccion atraves de nombre de clase 
const personaje = document.querySelector(".personaje");
personaje.textContent="Rick C-137";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent="Preparando nave";

const universo = document.querySelector("#universo");
universo.textContent="Preparando Universo";


const estadoMorty =document.querySelector("#morty .estado");
estadoMorty.textContent ="preparado para viajar"

const planetas =document.querySelectorAll(".planetas");
console.log(planetas)
console.log(planetas.length)

console.log (planetas[0].textContent);
console.log (planetas[1].textContent);
console.log (planetas[2].textContent);
console.log (planetas[3].textContent);
console.log (planetas[4].textContent);
console.log (planetas[5].textContent);

console.log ("recorrer otra vez de for");
for (let i=0; i<planetas.length;i++){
console.log(planetas[i].textContent);}

console.log ("con forEach");
planetas.forEach(function(planeta){
    console.log(planeta.textContent);
});

console.log ("con for of");
for (let planeta of planetas){
console.log(planeta.textContent);
}
