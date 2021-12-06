/*AUTOR: GONZALO ZAFFERANO
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar() 
{
	var destinoSeleccionado;
	var mensaje;

	destinoSeleccionado = document.getElementById("txtIdDestino").value;

	switch (destinoSeleccionado) 
	{
		case "Bariloche":
			mensaje = "Punto cardinal: OESTE";
			break;
		case "Cataratas":
			mensaje = "Punto cardinal: NORTE";
			break;
		case "Mar del plata":
			mensaje = "Punto cardinal: ESTE";
			break;
		case "Ushuaia":
			mensaje = "Punto cardinal: SUR";
			break;
	}
	alert(mensaje);


/*
	if (destinoSeleccionado == "Bariloche") 
	{
		mensaje = "Punto cardinal: OESTE";
	}
	else 
	{
		if (destinoSeleccionado == "Cataratas") 
		{
			mensaje = "Punto cardinal: NORTE";
		}
		else 
		{
			if (destinoSeleccionado == "Mar del plata") 
			{
				mensaje = "Punto cardinal: ESTE";
			}
			else 
			{
				mensaje = "Punto cardinal: SUR";
			}
		}
	}
*/


}//FIN DE LA FUNCIÓN