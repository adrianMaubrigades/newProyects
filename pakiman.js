var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.imagen.src = imagenes[this.nombre];
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>")
    document.write("<strong>" + this.nombre + "</strong><br>");
    document.write("<strong>" + this.vida + "</strong><br>");
    document.write("<strong>" + this.ataque + "</strong><br><hr>");
    document.write("</p>")
  }
}

//var cauchin = new Pakiman("Cauchin", 100, 30);
//var pokacho = new Pakiman("Pokacho", 80, 50);
//var tocinauro = new Pakiman("Tocinauro", 120, 40);
//console.log(cauchin, pokacho, tocinauro);

//pokacho.mostrar();
//cauchin.mostrar();
//tocinauro.mostrar();

var coleccion = [];
coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push( new Pakiman("Pokacho", 80, 50) );
coleccion.push( new Pakiman("Tocinauro", 120, 40) );

for(var pakin of coleccion) // en una nueva vercion hay un cambio, que es el in por el of, que muestra directamente la instancia en vez del indice, que el in es indice
{
  console.log(coleccion[pakin]);
  pakin.mostrar();
}

//console.log(coleccion);
