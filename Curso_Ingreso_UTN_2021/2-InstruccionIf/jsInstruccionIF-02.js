//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad debemos informar solo si la persona es mayor de edad


function mostrar()
{
	//Al ingresar una edad debemos informar solo si la persona es mayor de edad
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if ( edadUsuario >= 18)
	{
		mensaje = "Ustes de mayor de edad. Usted tiene ";
		mensaje += edadUsuario;
		mensaje +=" años.";

		alert(mensaje);

	}
/*
	else 
	{
		mensaje = "Usted es menor de edad. Usted tiene "+ edadUsuario + " años";
		alert(mensaje);
	}
*/	

}//FIN DE LA FUNCIÓN