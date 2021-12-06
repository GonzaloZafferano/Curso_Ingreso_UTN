/*AUTOR: Gonzalo Zafferano
Enunciado:
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() 
{
	var contador;
	var sumaAcumulada;
	var respuesta;
	var numeroElegido;

	contador = 0;
	sumaAcumulada = 0;
	respuesta = "s";

	while (respuesta == "s") 
	{
		numeroElegido = prompt("Por favor, ingrese un numero a continuacion: ");
		numeroElegido = parseFloat(numeroElegido);

		sumaAcumulada += numeroElegido;
		contador++;

		respuesta = prompt("Presione 's' para continuar ingresando numeros");
	}

	document.getElementById("txtIdSuma").value = sumaAcumulada;
	document.getElementById("txtIdPromedio").value = sumaAcumulada / contador;

}//FIN DE LA FUNCIÓN