/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//alert("ok");
	
	var numeroUno, numeroDos, resultado;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;

	alert("el Resultado de la suma es: " + resultado);

}



function restar()
{
	var numeroUno, numeroDos, resultado;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno - numeroDos;

	//alert("La variable 'resultado' es de tipo: " + typeof resultado);
	//es de tipo 'number' porque almacena un numero, resultado de una resta de enteros.

	//en .JS la resta '-' no requiere parseint() porque detecta automaticamente
    //que se quiere restar, y hace el parse por nosotros. Una vez terminada la
	//operacion de resta, las variables originales 'numeroUno' y 'numeroDos' vuelven a ser 'strings'.

	//en la suma '+' esto no ocurre, porque no sabe si quiero sumar numeros o 
	//concatenar strings, entonces no hace nada y deja todo como esta (con los 
	//strings o con los numeros) por eso hay que especificarle el parseint(). 
	//esto solo se da en .JS. En otros lenguajes hay que especificar si o si el parse.
	//con la division, la multiplicacion y la resta no haria falta el parse,
	//por la misma explicacion. Pero es buena practica hacer el parse.
	//la suma es el unico operador con doble funcion, sumar y concatenar.

	alert("el Resultado de la resta es: " + resultado);
}

function multiplicar()
{ 
	var numeroUno, numeroDos, resultado;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno * numeroDos;

	alert("el Resultado de la multiplicacion es: " + resultado);
	
}

function dividir()
{
	var numeroUno, numeroDos, resultado;
		
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	if (numeroUno == 0 || numeroDos == 0)
	{ 
		 alert("No se puede dividir entre 0. Reintentar");
	}
	else 
	{

	resultado = numeroUno / numeroDos;
	alert("el Resultado de la division es: " + resultado);

	}
	
	
}

