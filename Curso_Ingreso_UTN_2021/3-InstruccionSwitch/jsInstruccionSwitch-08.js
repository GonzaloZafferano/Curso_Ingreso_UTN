/*AUTOR: GONZALO ZAFFERANO
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoElegido;
	var mensaje;

	destinoElegido = document.getElementById("txtIdDestino").value;

	switch (destinoElegido) 
	{
		case "Ushuaia":
		case "Bariloche":
			mensaje="Hace FRIO en el destino indicado.";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje="Hace CALOR en el destino indicado.";
			break;
		
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN