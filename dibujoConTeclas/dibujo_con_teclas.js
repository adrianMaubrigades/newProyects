var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo2");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

function dibujarTeclado(evento)
{
  var colocito = "blue";
  var movimiento = 10;
  if (evento.keyCode == teclas.UP)
  {
    dibujarLinea(colocito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
  }
  if (evento.keyCode == teclas.DOWN)
  {
    dibujarLinea(colocito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
  }
  if (evento.keyCode == teclas.LEFT)
  {
    dibujarLinea(colocito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
  }
  if (evento.keyCode == teclas.RIGHT)
  {
    dibujarLinea(colocito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
  }
}

// este ejemplo tambien se podria haber resuelto con switch
