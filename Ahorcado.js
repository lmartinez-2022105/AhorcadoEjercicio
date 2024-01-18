var palabras=[Casa, Perro, Gato, Chihuahua];
var botonStart = document.getElementById("BotonStart");
var contador = document.getElementById("Contador");
var lienzo = document.getElementById("DibujoAhorcado");
var mistakes = 0;

function EmpezarJuego(){
    DibujarMono();
}

function DibujarMono(){
    dibujo = lienzo.getContext('2d');
    dibujo = lineWidth=1;
    

}


botonStart.addEventListener('click', EmpezarJuego());