/*
AUTOR: Gonzalo Zafferano
Enunciado:
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() 
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivoYNegativo;

	promedioPositivos = 0;
	promedioNegativos = 0;
	acumuladorNegativos = 0;
	acumuladorPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorPares = 0;
	contadorCeros = 0;
	respuesta = 's';

	while (respuesta == 's') 
	{
		numeroIngresado = prompt("Por favor, ingrese un numero: ");
		numeroIngresado = parseFloat(numeroIngresado);

		if (numeroIngresado >= 0) 
		{
			acumuladorPositivos += numeroIngresado;
			contadorPositivos++;
		}
		else 
		{
			acumuladorNegativos += numeroIngresado;
			contadorNegativos++;
		}

		if (numeroIngresado == 0) 
		{
			contadorCeros++;
		}
		
		if (numeroIngresado % 2 == 0) 
		{
			contadorPares++;
		}

		respuesta = prompt("Presione 's' para continuar ingresando numeros");
	}

	if (contadorPositivos != 0) 
	{
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}

	if (contadorNegativos != 0) 
	{
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}

	diferenciaPositivoYNegativo = acumuladorPositivos + acumuladorNegativos;
/*
	console.log("la suma de negativos es :" + acumuladorNegativos);
	console.log("la cantidad de negativos es :" + contadorNegativos);
	console.log("el promedio de negativos es :" + promedioNegativos);
	console.log("la suma de positivos es :" + acumuladorPositivos);
	console.log("la cantidad de positivos es :" + contadorPositivos);
	console.log("la promedio de positivos es :" + promedioPositivos);
	console.log("la cantidad de pares es :" + contadorPares);
	console.log("la cantidad de ceros es :" + contadorCeros);
	console.log("la diferencia entre positivos y negativos es :" + diferenciaPositivoYNegativo);
*/
	
		document.write("la suma de negativos es: " + acumuladorNegativos + "<br>");
		document.write("la cantidad de negativos es: " + contadorNegativos + "<br>");
		document.write("el promedio de negativos es: " + promedioNegativos + "<br>");
		document.write("la suma de positivos es: " + acumuladorPositivos + "<br>");
		document.write("la cantidad de positivos es: " + contadorPositivos + "<br>");
		document.write("la promedio de positivos es: " + promedioPositivos + "<br>");
		document.write("la cantidad de pares es: " + contadorPares + "<br>");
		document.write("la cantidad de ceros es: " + contadorCeros + "<br>");
		document.write("la diferencia entre positivos y negativos es: " + diferenciaPositivoYNegativo);
	


	/*
	
	
	
	
	
		//declarar contadores y variables 
		var respuesta;
		var numeroIngresado;
		var acumuladorNegativos;
		var acumuladorPositivos;
		var contadorPositivos;
		var contadorNegativos;
		var contadorCeros;
		var contadorPares;
		var promedioPositivos;
		var promedioNegativos;
		var diferenciaPositivoYNegativo;
	
		promedioPositivos=0;
		promedioNegativos=0;
		acumuladorNegativos = 0;
		acumuladorPositivos = 0;
		contadorPositivos = 0;
		contadorNegativos = 0;
		contadorPares = 0;
		contadorCeros = 0;
		respuesta = 's';
	
		do 
		{
			numeroIngresado = prompt("Por favor, ingrese un numero: ");
			numeroIngresado = parseFloat(numeroIngresado);
	
			  respuesta = prompt("Desea continuar ingresando numeros? 'si' - 'no'");
	
			if (numeroIngresado >= 0) 
			{
				acumuladorPositivos += numeroIngresado;
				contadorPositivos++;
				if (numeroIngresado == 0) 
				{
					contadorCeros++;
				}
			}
			else 
			{
				acumuladorNegativos += numeroIngresado;
				contadorNegativos++;
			}
	
			if (numeroIngresado % 2 == 0) 
			{
				contadorPares++;
			}
	
		} while (respuesta == 's');
	
		if(contadorPositivos!=0)
		{
		promedioPositivos = acumuladorPositivos / contadorPositivos;	
		}
	
		if(contadorNegativos!=0)
		{
		promedioNegativos = acumuladorNegativos / contadorNegativos;
		}
			
		diferenciaPositivoYNegativo = acumuladorPositivos + acumuladorNegativos;
	
		console.log("la suma de negativos es :" + acumuladorNegativos);
		console.log("la cantidad de negativos es :" + contadorNegativos);
		console.log("el promedio de negativos es :" + promedioNegativos);
		console.log("la suma de positivos es :" + acumuladorPositivos);
		console.log("la cantidad de positivos es :" + contadorPositivos);
		console.log("la promedio de positivos es :" + promedioPositivos);
		console.log("la cantidad de pares es :" + contadorPares);
		console.log("la cantidad de ceros es :" + contadorCeros);
		console.log("la diferencia entre positivos y negativos es :" + diferenciaPositivoYNegativo);
	
	
	
	
		*/












}//FIN DE LA FUNCIÓN