console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);


console.log(titulo);
titulo.textContent = "Laboratorio interdimensional"


const estado = document.getElementById("estado");
const boton = document.getElementById("botonportal");
boton.addEventListener ("click",function(){
    console.log ("Ejecutando click...");
    estado.textContent = "PORTAL ACTIVADO";
    console.log ("texto cambiado en el elemento estado");
    alert("proceso de activacion del portal terminado");
});

const boton1 = document.getElementById("listo");
boton1.addEventListener ("click",function(){
    estado.textContent = "AVENTURA LISTA ";
    alert("MORTY LISTO PARA LA EVENTURA");
});

let viajes = 0;
const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");
nuevoViaje.addEventListener ("click",function(){
    contador +=1;
    contador.textContent = viajes;
});