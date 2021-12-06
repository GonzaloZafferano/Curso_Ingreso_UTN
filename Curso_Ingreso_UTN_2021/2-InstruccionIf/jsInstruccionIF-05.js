//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

     if ( edadUsuario <=12 || edadUsuario >=18)
	 {
		 mensaje = "Usted no es un adolescente. Usted tiene ";
		 mensaje+= edadUsuario;
		 mensaje+=" años";
		 	
		 alert(mensaje);

	 }
	
	
}//FIN DE LA FUNCIÓN