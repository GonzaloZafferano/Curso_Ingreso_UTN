//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
//"EXCELENTE" para notas igual a 9 o 10,
//"APROBÓ" para notas mayores a 4,
//"Vamos, la proxima se puede" para notas menores a 4

function mostrar() 
{
	var notaRandom,mensaje;

	var notaRandom = Math.round(Math.random() * 10);

	if (notaRandom >= 9) 
	{
		mensaje="Excelente! su nota es ";
		mensaje+=notaRandom;
	}
	else if (notaRandom >= 4) 
	{
		mensaje="Aprobó! su nota es ";
		mensaje+=notaRandom;
	}
	else 
	{
		mensaje="Vamos, la proxima se puede. Su nota es ";
		mensaje+=notaRandom;
	}

		alert(mensaje);












	/*



	var numeroRandom =   Math.round(Math.random()*10);
	//La funcion Random(), (de la clase Math) retorna un número 
	//aleatorio entre 0 y 1 (NO incluido). Pero necesitamos que sea 
	//mayor que 1 y menor o igual a 10.
	//con *10 estamos multiplicando ese numero aleatorio, para que pueda ser mayor
	//que 1, es decir, AHORA estaria retornando numeros entre 0 y 10.
	//con la funcion Round(), (de la clase Math) redondeamos a ese
	//numero para que sea un entero y no un Float.
	//con el if, filtramos los 0.
	

	//Math.round(); //Redondea para Arriba si es .5 y redondea para abajo si es .49
	//Math.floor(); //PISO: Redondea siempre para ABAJO
	//Math.ceil(); //TECHO: Redondea siempre para ARRIBA

	if (numeroRandom >=9)
	alert("Excelente! su nota es "+ numeroRandom);

	else if (numeroRandom >=4)
	alert("Aprobó! su nota es "+ numeroRandom);

	else alert ("Vamos, la proxima se puede. Su nota es " + numeroRandom);



	*/

}//FIN DE LA FUNCIÓN