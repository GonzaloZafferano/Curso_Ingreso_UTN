/*
Autor: Gonzalo Zafferano
Consigna:
Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;

function comenzar() 
{
    var primerNumero;
    var segundoNumero;
    var operadorRandom;
    var operador;

    temporizador = setTimeout(() => 
    {
        document.getElementById("txtIdRespuesta").value = "Perdiste!";
        document.getElementById("txtIdRespuesta").disabled = true;
        alert("Fin del juego");
    }, 6000);

    primerNumero = Math.round(Math.random() * 9 + 1);
    segundoNumero = Math.round(Math.random() * 9 + 1);
    operadorRandom = Math.round(Math.random() * 3 + 1);

    switch (operadorRandom) 
    {
        case 1:
            operador = " +";
            respuesta = primerNumero + segundoNumero;
            break;
        case 2:
            operador = " -";
            respuesta = primerNumero - segundoNumero;
            break;
        case 3:
            operador = " *";
            respuesta = primerNumero * segundoNumero;
            break;
        case 4:
            operador = " /";
            respuesta = primerNumero / segundoNumero;
            break;
    }
    document.getElementById("txtIdPrimerNumero").value = primerNumero;
    document.getElementById("txtIDSegundoNumero").value = segundoNumero;
    document.getElementById("txtIdOperador").value = operador;
}//FIN DE LA FUNCIÓN

function Responder() 
{
    var respuestaUsuario;
    var mensaje;

    respuestaUsuario = document.getElementById("txtIdRespuesta").value;
    respuestaUsuario = parseFloat(respuestaUsuario);

    if (respuestaUsuario == respuesta) 
    {
        mensaje = "El resultado ES correcto: ";
        mensaje += respuestaUsuario;
        clearInterval(temporizador);
    }
    else 
    {
        mensaje = "El resultado NO ES correcto";
    }
    alert(mensaje);
}//FIN DE LA FUNCIÓN
