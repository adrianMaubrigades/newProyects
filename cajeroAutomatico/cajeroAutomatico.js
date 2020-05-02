var imagenes = [];
imagenes["valor100"] = "100pesos.png";
imagenes["valor50"] = "50pesos.png";
imagenes["valor20"] = "20pesos.png";
imagenes["valor10"] = "10pesos.png";
imagenes["valor5"] = "5pesos.png";

class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes["valor" + this.valor];
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
  }
}

function entregarDinero()
  {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value); // castear de tipo string a tipo entero numero, parsear a entero
    for(var bi of caja)
    {
      if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
          {
            papeles = bi.cantidad;
          }
        else
          {
            papeles = div;
          }
          entregado.push( new Billete(bi.valor, papeles) ); // recordando, es un array que estamos empujando por dentro nuevas instancias del objeto billete que tienen el valor que tengamos decidio y los pepels que queramos entregar (candidad)
          dinero = dinero - (bi.valor * papeles);
      }
    }
    if(dinero > 0)
    {
      resultado.innerHTML = ("soy un cajero malo y no puedo darte esa cantidad"); // la otra forma para no usar document.write(); que es mejor
    }
    else
    {
        for(var e of entregado) // instancia de cada uno de los objetos de la e
        {
          if(e.cantidad > 0)
          {
              resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "</ul></li><img src=" + e.imagen.src + "> <hr>";
          }
        }
    }
  }
var entregado = [];
var caja = [];
caja.push( new Billete(100, 50) );
caja.push( new Billete(50, 30) );
caja.push( new Billete(20, 20) );
caja.push( new Billete(10, 20) );
caja.push( new Billete(5, 30) );
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("boton");
b.addEventListener("click", entregarDinero);
