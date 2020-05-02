var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var text = document.getElementById("text_lineas")
var botton = document.getElementById("butoncito_adarle")
botton.addEventListener("click", dibujoPorClick);
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo( xinicial, yinicial);
    lienzo.lineTo( xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath()
  }

function dibujoPorClick()
{
  var x = parseInt(text.value);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;
  while (l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("green", 0, yi, xf, 300);
    l++;
  }
    dibujarLinea("red",1,1,1,299);
    dibujarLinea("red",1,299,299,299);
}
