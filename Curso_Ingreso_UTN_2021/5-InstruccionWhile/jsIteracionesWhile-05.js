/*
AUTOR: Gonzalo Zafferano
Enunciado:
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() 
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m.");

	while (sexoIngresado != "f" && sexoIngresado != "m") 
	{
		sexoIngresado = prompt("Dato invalido. Ingrese f ó m.");
	}

	if (sexoIngresado == 'f') 
	{
		sexoIngresado = "Femenino";
	}
	else 
	{
		sexoIngresado = "Masculino";
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN