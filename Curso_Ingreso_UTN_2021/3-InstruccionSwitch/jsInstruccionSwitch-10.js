/*AUTOR: GONZALO ZAFFERANO
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, informar si "Se viaja" o "No se viaja" 
a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas 
destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar() 
{
	var estacion;
	var destino;
	var mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	mensaje = "Lo sentimos, no se viaja a ";
	mensaje += destino;
	mensaje += " en ";
	mensaje += estacion;

	switch (estacion) 
	{
		case "Invierno":
			if (destino == "Bariloche") 
			{
				mensaje = "Felicidades! Disfrute su viaje a ";
				mensaje += destino;
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas") 
			{
				mensaje = "Felicidades! Disfrute su viaje a ";
				mensaje += destino;
			}
			break;
		case "Otoño":
			mensaje = "Felicidades! Disfrute su viaje a ";
			mensaje += destino;
			break;
		case "Primavera":
			if (destino != "Bariloche") 
			{
				mensaje = "Felicidades! Disfrute su viaje a ";
				mensaje += destino;
			}
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN