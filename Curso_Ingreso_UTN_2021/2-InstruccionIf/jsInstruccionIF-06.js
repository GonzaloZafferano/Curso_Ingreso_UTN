//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad debemos informar si la persona es mayor de edad 
//(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).


function mostrar()
{	
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if ( edadUsuario <=12)
	{
		mensaje = "Usted es un niño. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años.";
	}
	else if (edadUsuario >=18)
	{
		mensaje = "Usted es mayor de edad. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años.";
	}
	else 
	{	
		mensaje = "Ustes es un adolescente. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años.";
	} 
		alert(mensaje);



/*

		//Almaceno en una variable el resultado de la comparacion, lo cual sera TRUE o FALSE:

		var edadValida = edadUsuario>18 && edadUsuario<25;
		alert(edadValida); //imprime TRUE o FALSE, dependiendo de la comparacion de 
		//la linea de ARRIBA

*/


}//FIN DE LA FUNCIÓN