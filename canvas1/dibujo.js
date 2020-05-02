alert("esto es magía");
var d = document.getElementById("dibujito"); //es un metodo del documento que trae un objeto a travez de su id.
var lienzo = d.getContext("2d"); // metodo del canvas que en este caso esta ilustrado por la variable d para usar el contexto 2d que tambien existe el 3d que no es este aso.
console.log(lienzo); //para observar el contenido de lienzo
lienzo.beginPath(); //arrancar el trazo "apoyar el lapiz para empezar el trazo".
lienzo.strokeStyle = "red"; //elegir el color de la linea, es una variable por eso se le asigna el color rojo.
lienzo.moveTo(50, 100); //es un metodo para "mover el lapiz" desde donde comienza la linea, osea el origen.
lienzo.lineTo(200, 200); // dibujar la linea hasta donde se quiera, "el destino".
lienzo.stroke(); // dibuja la linea del tipo que queriamos. osea solo dibuja la raya.
lienzo.closePath(); //finaliza el trazo "levantar el lapiz", es un decir.

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(25, 200);
lienzo.lineTo(200, 0);
lienzo.stroke();
lienzo.closePath(); //si no se escribe el closePath la proxima linea iniciaria desde donde termino la anterior.

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{ //no importa el lugar donde este colocada la funciona va a funcionar bien igual, asi funciona JS.
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.moveTo( xinicial, yinicial);
  lienzo.lineTo( xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath()
}

dibujarLinea("green", 10, 150, 220, 10);
dibujarLinea("pink", 200, 10, 150, 190);
dibujarLinea("black", 50, 50, 200, 200);
