/*
AUTOR: Gonzalo Zafferano
Punto 06 adivina el numero:
En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos;

function comenzar() 
{
	numeroSecreto = Math.round(Math.random() * 9 + 1);
	contadorIntentos = 0;
	document.getElementById("txtIdIntentos").value = contadorIntentos;
}

function verificar() 
{
	var numeroIngresado;
	var mensaje;

	numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
	contadorIntentos++;

	if (numeroIngresado == numeroSecreto) 
	{
		mensaje = "El numero secreto es ";
		mensaje += numeroSecreto;
		mensaje += ". ";

		switch (contadorIntentos) 
		{
			case 1:
				mensaje += "Usted es un Psíquico";
				break;
			case 2:
				mensaje += "Excelente percepción";
				break;
			case 3:
				mensaje += "Esto es suerte";
				break;
			case 4:
				mensaje += "Excelente técnica";
				break;
			case 5:
				mensaje += "Usted está en la media";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje += "Falta técnica";
				break;
			default:
				mensaje += "Afortunado en el amor!!";
				break;
		}
		alert(mensaje);
	}
	document.getElementById("txtIdIntentos").value = contadorIntentos;
}