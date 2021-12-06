//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
//NO HACER NADA,
//pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje:
// 'Es soltero y no es menor.'

function mostrar()
{
	 var edad, estadoCivil;

	 edad = parseInt(document.getElementById("txtIdEdad").value);
	 estadoCivil = document.getElementById("estadoCivil").value;

  	if (edad >= 18 && estadoCivil == "Soltero")
	  {
		alert("Es soltero y NO es menor.");
	  }
 

	  //negado;
	  //if(!(edad <18 || estadoCivil != "Soltero"))
	  //el !AND trabaja como un OR (pero con falses). Si tan solo una condicion es falsa, todo es FALSE, y lo pasa a verdadero.
	 //Es decir, necesito una sola condicion Falsa para que entre al IF.
	 
	  //el !OR trabaja como el AND (pero con falses). Si todas las condiciones son falsas, es FALSE, y lo pasa a verdadero.
	  //Es decir, necesito TODAS las condiciones FALSAS para que entre al IF.

}//FIN DE LA FUNCIÓN