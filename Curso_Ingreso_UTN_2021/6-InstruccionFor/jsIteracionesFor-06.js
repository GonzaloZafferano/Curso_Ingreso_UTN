
/*
AUTOR: Gonzalo Zafferano
Consigna:
al presionar el botón pedir un número. 
Mostrar los numeros pares desde el 1 al número ingresado, y mostrar 
la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorPares;

	contadorPares=0;

	numeroIngresado=prompt("Ingrese un numero: ");
	numeroIngresado=parseInt(numeroIngresado);

	for (contador=1; contador<=numeroIngresado;contador++)
	{
		if (contador%2==0)
		{
			alert(contador);
			contadorPares++;
		}
	}

	alert("Cantidad pares: " + contadorPares);
}//FIN DE LA FUNCIÓN