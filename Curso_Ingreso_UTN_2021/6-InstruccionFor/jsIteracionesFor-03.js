/*
AUTOR: Gonzalo Zafferano
Consigna:
al presionar el botón pedir la cantidad de
veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar() 
{
	var cantidadIngresada;
	var contador;

	cantidadIngresada = prompt("Por favor, ingrese el número de repeticiones del mensaje");
	cantidadIngresada = parseInt(cantidadIngresada);

	for (contador = 0; contador < cantidadIngresada; contador++) 
	{
		alert("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN