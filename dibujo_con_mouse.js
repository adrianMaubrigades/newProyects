var cuadrito = document.getElementById("area_de_dibujo3"); // para activar el vanvas de html
var papel = cuadrito.getContext("2d"); // darle el contexto de 2d al dibujo
var x = 150;
var y = 150;
var botton = document.getElementById("boton_borrar"); //para activar el boton del html

document.addEventListener("click", dibujarMouse); //dibujar haciendo clicks que se dispara la funcion dibujarMouse
botton.addEventListener("click", borrarDibujo);  // esto es para activar el boton de borrar, que efectivamente activa borrarDibujo
botton.addEventListener("click", dibujarRecuadro); // esto solamente lo puse para que cada vez que activamos el boton haga el recuadro de borde del canvas

dibujarLinea("black", 0,0,0,300, papel);
dibujarLinea("black", 0,300,300,300, papel);
dibujarLinea("black", 300,300,300,0, papel);
dibujarLinea("black", 300,0,0,0, papel);

function dibujarRecuadro() //dibuja el recuadro
  {
dibujarLinea("black", 0,0,0,300, papel);
dibujarLinea("black", 0,300,300,300, papel);
dibujarLinea("black", 300,300,300,0, papel);
dibujarLinea("black", 300,0,0,0, papel);
  }
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) // para dibujar las lineas con sus respectivas posiciones facilitandolo con una funcion
  {
    lienzo.beginPath(150, 150, 150, 150);
    lienzo.strokeStyle =color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

function dibujarMouse(evento) // cuando el usuario hace clik se activa esto para dibujar desde donde estaba la ultima linea a donde esta el puntero
  {
    var colorcito = "blue";
    dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);     //offset () devuelve un objeto que contiene un valor numérico de la posición left y top, los que indican la posición actual de un elemento en relación al documento. Con este método podemos establecer las coordenadas referente a top y left.
    x = evento.offsetX;
    y = evento.offsetY;
    console.log(evento);
  }

function borrarDibujo() // la funcion para borrar el dibujo
  {
  papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
  }
