var palabras = [Casa, Perro, Gato, Chihuahua];
var botonStart = document.getElementById("BotonStart");
var contador = document.getElementById("Contador");
var canvas = document.getElementById("pitbull");
var dibujo = canvas.getContext("2d");
var mistakes = 0;



//function EmpezarJuego(){
//}



//function DibujarMono() {
    //Cabeza
    dibujo.beginPath();
    dibujo.arc(200, 200, 50, 0, Math.PI * 2, true);
    //Cuerpo
    dibujo.lineWidth = 1;
    dibujo.moveTo(150, 150);
    dibujo.lineTo(100, 200);
    //Brazo Izq
    dibujo.moveTo(150,150);
    dibujo.lineTo(90,150);
    dibujo.stroke();


//}


//botonStart.addEventListener('click', EmpezarJuego());