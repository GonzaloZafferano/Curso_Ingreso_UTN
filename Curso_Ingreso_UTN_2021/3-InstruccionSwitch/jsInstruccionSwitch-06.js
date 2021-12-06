/*AUTOR: GONZALO ZAFFERANO
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".

*/
function mostrar() 
{
	var horaIngresada;
	var mensaje;

	horaIngresada = parseInt(document.getElementById("txtIdHora").value);

	switch (horaIngresada) 
	{
		case 01:
		case 02:
		case 03:
		case 04:
		case 05:
		case 06:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			mensaje = "Es de noche";
			break;
		case 07:
		case 08:
		case 09:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde";
			break;
		default:
			mensaje = "La hora no existe";
			break;
	}
	alert(mensaje);

	
/*
	//CON IF:

	if (horaIngresada >= 7 && horaIngresada <= 11) 
	{
		mensaje = "Es de mañana";
	}
	else 
	{
		if (horaIngresada >= 12 && horaIngresada <= 19) 
		{
			mensaje = "Es de tarde";
		}
		else 
		{
			if ((horaIngresada >= 20 && horaIngresada <= 24) || (horaIngresada >= 0 && horaIngresada <=6))
			{
				mensaje = "Es de noche";
			}
			else 
			{
				mensaje = "La hora no existe";
			}
		}
	}
	alert(mensaje);
*/






}//FIN DE LA FUNCIÓN