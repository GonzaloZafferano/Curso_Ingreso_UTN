/*AUTOR: GONZALO ZAFFERANO
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar() 
{
	var mesSeleccionado;

	mesSeleccionado = document.getElementById("txtIdMes").value;

	switch (mesSeleccionado) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate, estamos en invierno!!");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio!");
			break;
	}

	/*
	El Switch COMIENZA a ejecutar codigo, a partir de la linea donde
	se encuentre 1 coincidencia.
	Una vez encontrada esa coincidencia, ejecuta todo el codigo de esa linea,
	incluso el codigo de otros CASES que hay debajo, hasta encontrar un BREAK.
	El BREAK CORTA EL SWITCH, saca el flujo del SWITCH.
	
	Si no hay un BREAK, terminaria ejecutando todos los codigos por debajo,
	pero con el BREAK, lo limita.
	En otras palabras, una vez que el SWITCH encuentra una coincidencia, 
	ejecuta todo el codigo hasta encontrar un BREAK.
	El BREAK CORTA EL SWITCH, saca el flujo del SWITCH.
	*/

}//FIN DE LA FUNCIÓN