/*
AUTOR: Gonzalo Zafferano
Enunciado:
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".

Aclaración: hacer un switch y dentro toda la lógica.
*/
function mostrar() 
{
    var horaIndicada;
    var mensaje;

    horaIndicada = document.getElementById("laHora").value;
    horaIndicada = parseInt(horaIndicada);


    switch (horaIndicada) 
    {
        case 06:
        case 07:
        case 08:
        case 09:
        case 10:
        case 11:
            mensaje = "Es de mañana. ";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            mensaje = "Es de tarde. ";
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 01:
        case 02:
        case 03:
        case 04:
        case 05:
            mensaje = "Es de noche. ";
            if (horaIndicada>19 && horaIndicada<24) 
            {
                mensaje += "A dormir";
            }
            break;
        default:
            mensaje = "La hora NO es valida.";
            break;
    }
    alert(mensaje);
}
