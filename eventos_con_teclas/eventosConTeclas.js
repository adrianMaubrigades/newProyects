var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
  if (evento.keyCode == teclas.UP)
  {
    console.log("vamo' pa arriba");
  }
  if (evento.keyCode == teclas.DOWN)
  {
    console.log("vamo' pa abajo");
  }
  if (evento.keyCode == teclas.LEFT)
  {
    console.log("vamo' pa la izquierda");
  }
  if (evento.keyCode == teclas.RIGHT)
  {
    console.log("vamo' pa la derecha");
  }
}

// este ejemplo tambien se podria haber resuelto con switch
// osea
//    switch(evento.keyCode) {
//      case teclas.UP:
//    console.log("arriba");
//    break;
//    default:
//}  y etc... con el resto de las teclas, pero para mi gusto el if es mejor y mas simple, aparte el switch es como raro entonces lo dejo asi
