/*AUTOR: Gonzalo Zafferano
while 08
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() 
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var contador;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1; //empieza en 1, porque si INICIO multiplicando por 0, falla todo
	respuesta = 's';

	while (respuesta == 's')
	{
		numeroIngresado = prompt("Por favor, ingrese un numero a continuacion:");
		numeroIngresado = parseFloat(numeroIngresado);

		if (numeroIngresado >= 0) 
		{
			sumaPositivos += numeroIngresado;
		}
		else 
		{
			multiplicacionNegativos *= numeroIngresado;
			contador++;
		}

		respuesta = prompt("Presion 's' para continuar ingresando numeros");
	} 

	if (contador == 0) 
	{
		multiplicacionNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;



	/*


	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1; //empieza en 1, porque si INICIO multiplicando por 0, falla todo
	respuesta = 's';

	do 
	{
		numeroIngresado = prompt("Por favor, ingrese un numero a continuacion:");
		numeroIngresado = parseFloat(numeroIngresado);

		if (numeroIngresado >= 0) 
		{
			sumaPositivos += numeroIngresado;
		}
		else 
		{
			multiplicacionNegativos *= numeroIngresado;
			contador++;
		}

		respuesta = prompt("Presion 's' para continuar ingresando numeros");
	} while (respuesta == 's');

	if (contador == 0) 
	{
		multiplicacionNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;



	*/















}//FIN DE LA FUNCIÓN