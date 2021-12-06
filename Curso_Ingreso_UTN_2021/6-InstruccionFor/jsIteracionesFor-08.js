
/*
AUTOR: Gonzalo Zafferano
Consigna:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar() 
{

	var numeroIngresado;
	var i;
	var contador;
	var mensaje;

	contador = 0;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado)) 
	{
		numeroIngresado = prompt("Error, Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
	}

	for (i = 2; i < numeroIngresado; i++) 
	{
		if (numeroIngresado % i == 0) 
		{
			contador++;
		}
	}

	if (contador == 0 && numeroIngresado >1) 
	{
		mensaje = numeroIngresado + " Es Primo";
	}
	else
	{
		mensaje = numeroIngresado + " NO es Primo";
	}
	alert(mensaje);





	/*

	var i;
	var contadorDivisores
	var numeroIngresado;
	var mensaje;

	contadorDivisores = 0;
	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	for (i = 1; i <= numeroIngresado; i++) 
	{
		if (numeroIngresado % i == 0) 
		{
			contadorDivisores++;
		}
	}

	if (contadorDivisores == 2) 
	{
		mensaje = numeroIngresado + " es Primo.";
	}
	else 
	{
		mensaje = numeroIngresado + " NO es Primo.";
	}
	alert(mensaje);

	*/













}//FIN DE LA FUNCIÓN