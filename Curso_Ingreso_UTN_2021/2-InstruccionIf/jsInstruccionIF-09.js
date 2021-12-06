//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
function mostrar()
{
	var numeroAleatorio,numeroMaximo,numeroMinimo;

	numeroMaximo=10;
	numeroMinimo=1;

	numeroAleatorio = Math.round(Math.random()*(numeroMaximo-numeroMinimo)+numeroMinimo);

	alert(numeroAleatorio);


/*

	//OTRA FORMA 2:
	//declaro la variable
	var aleatorio;

	//le asigno un valor aleatorio, entre 0 y 0.999999, con math.random()
	aleatorio=Math.random();

	//ese numero aleatorio lo multiplico por 10, para que me de entre 0 y 9.999
	aleatorio=aleatorio*10;

	//con parseINT() filtro los enteros, de forma que no hay decimales, y me 
	//quedan enteros entre 0 y 9. (sin decimales)
	aleatorio= parseInt(aleatorio);

	//con aleatorio +1, le sumo 1, asi me queda un numero
	//entre un minimo de 1 (0+1) y un max de 10 (9+1)
	aleatorio= aleatorio+1;

	//imprimo:
	alert(aleatorio);


*/

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


	if (numeroRandom >=1)
	{
		alert(numeroRandom);
	}
	else 
	{
		alert ("Reintentar, salio el numero '0'");
	}


	*/


}//FIN DE LA FUNCIÓN