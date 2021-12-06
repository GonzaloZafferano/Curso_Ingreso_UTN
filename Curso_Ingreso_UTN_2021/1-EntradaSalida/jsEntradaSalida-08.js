/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	

	//declaracion de variables:
	var numeroUno, numeroDos, resto;
		
	
	//asignacion de variables:
	numeroDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);

	//numero que divide: divisor
	numeroDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	if (numeroDividendo == 0 || numeroDivisor == 0)
	{ 
 		alert("No se puede dividir entre 0. Reintentar");
	}
	else 
	{

	resto = numeroDividendo % numeroDivisor;
		alert("el resto de la division es: " + resto);

	}


}
