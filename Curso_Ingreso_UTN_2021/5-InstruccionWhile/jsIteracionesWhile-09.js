/*AUTOR: Gonzalo Zafferano
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() 
{
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var banderaDelPrimero;

	banderaDelPrimero = 0;
	respuesta = 's';

	while (respuesta == 's')
	{
		numeroIngresado = prompt("Por favor, ingrese un numero a continuacion:");
		numeroIngresado = parseFloat(numeroIngresado);
		
		if (banderaDelPrimero == 0) 
		{
			banderaDelPrimero++;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else 
		{
			if (numeroIngresado > numeroMaximo) 
			{
				numeroMaximo = numeroIngresado;
			}
			else 
			{
				if (numeroIngresado < numeroMinimo) 
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}
		respuesta = prompt("Presione 's' para continuar ingresando numeros");
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;


	//FORMA 2 REDUCIDA:

	/*

		// declarar variables
		var banderaDelPrimero;
		var numeroIngresado;
		var numeroMaximo;
		var numeroMinimo;
		var respuesta;
	
		//iniciar variables
		banderaDelPrimero = 0;
		respuesta = 's';
	
		do 
		{
			numeroIngresado = prompt("Por favor, ingrese un numero a continuacion:");
			numeroIngresado = parseFloat(numeroIngresado);
	
			respuesta = prompt("Presione 's' para continuar ingresando numeros");
	
			if ((banderaDelPrimero == 0) || (numeroIngresado > numeroMaximo)) 
			{
				numeroMaximo = numeroIngresado;
			}
			if ((banderaDelPrimero == 0) || (numeroIngresado < numeroMinimo)) 
			{
				numeroMinimo = numeroIngresado;
			}
			banderaDelPrimero++;
	
		} while (respuesta == "s");
	
		document.getElementById("txtIdMaximo").value = numeroMaximo;
		document.getElementById("txtIdMinimo").value = numeroMinimo;

	*/
}//FIN DE LA FUNCIÓN