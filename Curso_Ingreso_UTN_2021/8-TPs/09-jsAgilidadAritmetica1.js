/*
Autor: Gonzalo Zafferano
Consigna:
Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    var primerNumero;
    var segundoNumero;
    var operadorRandom;
    var operador;

    primerNumero=Math.round(Math.random()*9+1);
    segundoNumero=Math.round(Math.random()*9+1);
    operadorRandom=Math.round(Math.random()*3+1);

    switch(operadorRandom)
    {
        case 1:
            operador= " +";
            respuesta=primerNumero+segundoNumero;
            break;
        case 2:
            operador= " -";
            respuesta=primerNumero-segundoNumero;
            break;
        case 3:
            operador= " *";
            respuesta=primerNumero*segundoNumero;
            break;
        case 4:
            operador= " /";
            respuesta=primerNumero/segundoNumero;
            break;    
    }
    document.getElementById("txtIdPrimerNumero").value=primerNumero;
    document.getElementById("txtIdSegundoNumero").value=segundoNumero;
    document.getElementById("txtIdOperador").value=operador;
}//FIN DE LA FUNCIÓN

function Responder()
{
    var respuestaUsuario;
    var mensaje;

    respuestaUsuario=parseInt(document.getElementById("txtIdRespuesta").value);

    if(respuestaUsuario==respuesta)
    {
       mensaje="El resultado ES correcto: ";
       mensaje+=respuestaUsuario;
    }
    else
    {
        mensaje="El resultado NO ES correcto";
    }
	alert(mensaje);
}//FIN DE LA FUNCIÓN
