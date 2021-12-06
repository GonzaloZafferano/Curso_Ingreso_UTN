/*
Autor: Gonzalo Zafferano
Consigna:
En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto; 
var tiempoInicio;
var contadorSegundos;

function comenzar() 
{
    var numeroRandomColor;

    contadorSegundos = 0;

    numeroRandomColor = Math.round(Math.random() * 5 + 1);

    switch (numeroRandomColor) 
    {
        case 1:
            ColorSecreto = "azul";
            break;
        case 2:
            ColorSecreto = "verde";
            break;
        case 3:
            ColorSecreto = "rojo";
            break;
        case 4:
            ColorSecreto = "marron";
            break;
        case 5:
            ColorSecreto = "celeste";
            break;
        case 6:
            ColorSecreto = "amarillo";
            break;
    }
    document.getElementById("txtIdColorElegido").value = ColorSecreto;

    tiempoInicio = setInterval(() => 
    {
        contadorSegundos++;
    }, 1000);   
}

function Responder(colorParametro) 
{
    var mensaje;

    if (ColorSecreto == colorParametro) 
    {
        clearInterval(tiempoInicio);
        mensaje = "Ganaste! Acertaste en " + contadorSegundos + " segundos!";
        comenzar();
    }
    else 
    {
        mensaje = "Color equivocado, el tiempo cuenta! " + contadorSegundos + " segundos!";
    }
    alert(mensaje);
}//FIN DE LA FUNCIÓN
