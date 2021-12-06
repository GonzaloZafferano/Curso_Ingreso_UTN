//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad menor a 18 años y un estado civil distinto 
//a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño 
//para NO ser soltero.'

function mostrar()
{
	var edadUsuario, estadoCivilUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	estadoCivilUsuario = document.getElementById("estadoCivil").value;

	if (edadUsuario < 18 && estadoCivilUsuario != "Soltero")
	{
	alert ("Usted es muy joven para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN