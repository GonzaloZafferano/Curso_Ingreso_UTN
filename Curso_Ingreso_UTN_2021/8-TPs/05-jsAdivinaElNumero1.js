/*
AUTOR: Gonzalo Zafferano
Punto 05 adivina el numero:
Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;

function comenzar() 
{
  numeroSecreto = Math.round(Math.random() * 99 + 1);
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
}

function verificar() 
{
  var numeroIngresado;
  var mensaje;

  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  contadorIntentos++;

  switch (numeroSecreto) 
  {
    case numeroIngresado:
      mensaje = "Usted es el ganador!! El numero secreto es ";
      mensaje += numeroIngresado;
      mensaje += ", y lo obtuvo en ";
      mensaje += contadorIntentos;
      mensaje += " intentos!";
      break;
    default:
      if (numeroIngresado > numeroSecreto) 
      {
        mensaje = "Se paso del numero secreto!";
      }
      else 
      {
        mensaje = "Le falta para llegar al numero secreto!";
      }
      break;
  }
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  alert(mensaje);






  /*
  
    if (numeroIngresado == numeroSecreto) 
    {
      mensaje = "Usted es el ganador!! El numero secreto es ";
      mensaje += numeroIngresado;
      mensaje += ", y lo obtuvo en ";
      mensaje += contadorIntentos;
      mensaje += " intentos!";
    }
    else 
    {
      if (numeroIngresado > numeroSecreto) 
      {
        mensaje = "Se paso del numero secreto!";
      }
      else 
      {
        mensaje = "Le falta para llegar al numero secreto!";
      }
    }
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert(mensaje);
  
  */

}