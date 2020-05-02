var d = document.getElementById("dibujito2");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var m = 30;
var yi2, xf2;
var lineas2 = 30

while (l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("green", 0, yi, xf, 300);
  console.log("Linea " + l);
  l++
}

dibujarLinea("red",1,1,1,299);
dibujarLinea("red",1,299,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{ //no importa el lugar donde este colocada la funcion va a funcionar bien igual, asi funciona JS.
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("blue",1,1,299,1);
dibujarLinea("blue",299,1,299,299);

for(m = 0; m < lineas2; m++)
{
  yi2 = 10 * (m - 1);
  xf2 = 10 * m;
  dibujarLinea("red", 300, yi2, xf2, 0);
  console.log("Lineas2 " + m);
}
