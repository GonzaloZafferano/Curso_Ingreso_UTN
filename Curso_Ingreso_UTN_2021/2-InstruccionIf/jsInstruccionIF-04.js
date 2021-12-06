//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad debemos informar si la persona es adolescente, 
//edad entre 13 y 17 años (inclusive) .

function mostrar()
{
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if ( edadUsuario >=13 && edadUsuario <= 17)
	{
		mensaje = "Ustes es un adolescente. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+=" años";
				
		alert(mensaje);

	}

/*	

	else if (edadUsuario >17)
	{
		mensaje = "Usted es mayor de edad. Usted tiene "+ edadUsuario + " años";
		alert (mensaje);
	}
	else 
	{
mensaje = "Usted tiene menos de 13 años. Usted tiene "+ edadUsuario + " años";
	alert(mensaje);
	} 
	
*/

}//FIN DE LA FUNCIÓN