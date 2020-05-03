var usua = document.getElementById("usuario");
var contras = document.getElementById("contra");
var hor = document.getElementById("hora");
var des = document.getElementById("destino");
var b = document.getElementById("boton");
b.addEventListener("click", verificarUsuario);
var y = "Pepe";
var z = 123;
var a = "BBVA";
var s = "Santander";
var h = "BROU";
var saldo = 1234567;
var envio = 1000000;

var m = false;
var n = false;
var o = false;
var p = false;
var r = 100;

function verificarUsuario()
  {
    d = parseInt(hor.value);
    var u = (usua.value);
    var c = parseInt(contras.value);
    if(u == y)
      {
        xxxusuario.innerHTML = "El usuario es correcto, pertenece al BBVA";
        m = true;
      }
    else
      {
        xxxusuario.innerHTML = "El usuario es incorrecto, por favor intentelo nuevamente";
      }
    if(c == z)
      {
        xxxcontra.innerHTML = "La contraseña es correcta.";
        n = true;
      }
    else
      {
        xxxcontra.innerHTML = "La contraseña es incorrecta, por favor intentelo nuevamente";
      }
    if(des.value == a)
      {
        xxxdestino.innerHTML = "Ambos usuarios son del mismo banco por lo cual no habra comision de trasnferencia";
        o = true;
      }
    else if((des.value == s) || (des.value == h))
      {
        xxxdestino.innerHTML = "Los usuarios son de diferentes cuentas por lo cual se cobrara una comision de $100";
        o = true;
        envio = envio + r;
      }
    else
      {
        xxxdestino.innerHTML = "El banco destino no existe, por favor reintente nuevamente.";
      }
    if((8 <= d && d<= 12) || (15 <= d && d <= 20))
      {
        xxxhora.innerHTML = "son las: " + d + " Se encuentra dentro del horario de envios.";
        p = true;
      }
    else if((8 >= d && d >= 12) || (15 >= d && d >= 20))
      {
        xxxhora.innerHTML = "son las: " + d + " No se encuentra dentro del horario de envios.";
      }
    else
      {
        xxxhora.innerHTML = "No coloco un horario correcto señor, verifique por favor.";
      }

    if((m && n) && (o && p))
      {
        alert("La transferencia del millon de dolares fue exitosa");
        xxxsaldoAnterior.innerHTML = "Su saldo anterior era: $" + saldo;
        xxxresultado.innerHTML = "Su saldo actual es: $" + (saldo - envio);
      }
    else
      {
        alert("La trasnferencia fallo, intente nuevamente.");
      }
  }
