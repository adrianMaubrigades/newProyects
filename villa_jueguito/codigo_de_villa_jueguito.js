var vp = document.getElementById("villa_jueguito_mapa");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var oso = {
  url: "oso.png",
  cargaOK: false
}

var cantidadVacas = aleatorio(0, 25);
var cantidadCerdos = aleatorio(0, 25);
var cantidadPollos = aleatorio(0, 25);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

fondo.objeto = new Image();
fondo.objeto.src = mapa;
fondo.objeto.addEventListener("load", cargarMapa);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

oso.objeto = new Image();
oso.objeto.src = oso.url;
oso.objeto.addEventListener("load", cargarOso);

function cargarMapa()
{
fondo.cargaOK = true;
dibujar();
}
function cargarVacas()
{
vaca.cargaOK = true;
dibujar();
}
function cargarCerdos()
{
cerdo.cargaOK = true;
dibujar();
}
function cargarPollos()
{
pollo.cargaOK = true;
dibujar();
}
function cargarOso()
{
oso.cargaOK = true;
dibujar();
}

function dibujar()
  {
    if(fondo.cargaOK == true)
    {
    papel.drawImage(fondo.objeto, 0, 0);
    dibujarLinea("black", 1,1,1,500, papel); // para el borde
    dibujarLinea("black", 1,500,500,500, papel);
    dibujarLinea("black", 500,500,500,1, papel);
    dibujarLinea("black", 500,1,1,1, papel);
    }
    if(vaca.cargaOK == true)
    {
      console.log(cantidadVacas + " Vacas.");
      for(var v=0; v < cantidadVacas; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
      papel.drawImage(vaca.objeto, x, y);
      }
    }
    if(cerdo.cargaOK == true)
    {
      console.log(cantidadCerdos + " Cerdos.");
      for(var v=0; v < cantidadCerdos; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7); // aunque por ahora no supe como arreglar que se superpongan entre vacas, cerdos y pollos (-.-')
        var x = x * 60;
        var y = y * 60;
    papel.drawImage(cerdo.objeto, x, y);
      }
    }
    if(pollo.cargaOK == true)
    {
      console.log(cantidadPollos + " Pollos.");
      for(var v=0; v < cantidadPollos; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
    papel.drawImage(pollo.objeto, x, y);
      }
    }

}
function aleatorio(min, max)
  {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1) + min);
    return resultado;
  }

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
      papel.beginPath();
      papel.strokeStyle =color;
      papel.lineWidth = 3;
      papel.moveTo( xinicial, yinicial);
      papel.lineTo( xfinal, yfinal);
      papel.stroke();
      papel.closePath()
    }
//--------------------------------------------------------------------------
// aca empieza la parte del codigo para mover al oso
  document.addEventListener("keydown", moverOso);
  var x = aleatorio(1, 420);
  var y = aleatorio(1, 420);

  if(oso.cargaOK == true)
    {
    papel.drawImage(oso.objeto, x, y);
    }
  function moverOso(evento)
  {
    var movimiento = 30;

    if (evento.keyCode == teclas.UP)
    {
      papel.drawImage(oso.objeto, x, y - movimiento);
      y = y - movimiento;
    }
    if (evento.keyCode == teclas.DOWN)
    {
      papel.drawImage(oso.objeto, x, y + movimiento);
      y = y + movimiento;
    }
    if (evento.keyCode == teclas.LEFT)
    {
      papel.drawImage(oso.objeto, x - movimiento, y);
      x = x - movimiento;
    }
    if (evento.keyCode == teclas.RIGHT)
    {
      papel.drawImage(oso.objeto, x + movimiento, y);
      x = x + movimiento;
    }
  }
