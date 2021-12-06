
/*
AUTOR: Gonzalo Zafferano
Consigna:
al presionar el botón pedir un número. 
Mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.

*/
function mostrar() 
{
	var numeroIngresado;
	var contador;
	var contadorDivisores;

	contadorDivisores=0;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	for (contador = 1; contador <= numeroIngresado; contador++) 
	{
		if (numeroIngresado % contador == 0) 
		{
			contadorDivisores++;
			alert(contador);
		}
	}
	alert("Cantidad de divisores: " + contadorDivisores);
}//FIN DE LA FUNCIÓN