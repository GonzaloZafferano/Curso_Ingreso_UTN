//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad debemos informar si la persona es mayor de edad, 
//sino informar que es un menor de edad.

function mostrar()
{
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if ( edadUsuario >= 18)
	{
		mensaje = "Ustes de mayor de edad. Usted tiene ";
		mensaje += edadUsuario;
		mensaje +=" años.";
	}
	else 
	{
		mensaje = "Usted es menor de edad. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años";
	}
		alert(mensaje);
}//FIN DE LA FUNCIÓN