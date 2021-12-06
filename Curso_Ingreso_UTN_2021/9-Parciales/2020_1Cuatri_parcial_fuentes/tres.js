/*
AUTOR: GONZALO ZAFFERANO
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar() 
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var temperaturaMasAlta;
	var nombreConTemperaturaMasAlta;
	var contadorMayoresViudos;
	var contadorHombresSolteros;
	var contadorHombresSolterosOViudos;
	var contadorMayoresConFiebre;
	var promedioEdadHombresSolteros;
	var sumatoriaEdadHombresSolteros;
	var flag;
	var respuesta;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;

	contadorHombresSolteros=0;
	contadorMayoresViudos = 0;
	contadorHombresSolterosOViudos = 0;
	contadorMayoresConFiebre = 0;
	promedioEdadHombresSolteros = 0;
	sumatoriaEdadHombresSolteros = 0;
	temperaturaMasAlta = 0;
	flag = 0;
	respuesta = 's';

	while (respuesta == 's') 
	{
		nombre = prompt("Por favor, ingrese su nombre");
		edad = prompt("Por favor, ingrese su edad");
		edad = parseInt(edad);

		sexo = prompt("Por favor, ingrese sexo 'm' o 'f'");
		while (sexo != 'f' && sexo != 'm') 
		{
			sexo = prompt("Valor invalido. Por favor, ingrese sexo 'm' o 'f'");
		}

		estadoCivil = prompt("Por favor, ingrese estado civil: casado, soltero, viudo");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") 
		{
			estadoCivil = prompt("Valor invalido. Por favor, ingrese estado civil: casado, soltero, viudo");
		}
		temperaturaCorporal = prompt("Por favor, ingrese la temperatura corporal");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		if (flag == 0) 
		{
			flag = 1;
			temperaturaMasAlta = temperaturaCorporal;
			nombreConTemperaturaMasAlta = nombre;
		}
		else 
		{
			if (temperaturaCorporal > temperaturaMasAlta) 
			{
				temperaturaMasAlta = temperaturaCorporal;
				nombreConTemperaturaMasAlta = nombre;
			}
		}

		if (edad > 17 && estadoCivil == "viudo") 
		{
			contadorMayoresViudos++;
		}

		if (sexo == 'm' && (estadoCivil == "soltero" || estadoCivil == "viudo")) 
		{
			contadorHombresSolterosOViudos++;

			if (estadoCivil == "soltero") 
			{
				contadorHombresSolteros++;
				sumatoriaEdadHombresSolteros += edad;
			}
		}

		if (edad > 60 && temperaturaCorporal > 38) 
		{
			contadorMayoresConFiebre++;
		}

		respuesta = prompt("Desea continuar? 's' o 'n'");
		while (respuesta != 's' && respuesta != 'n') 
		{
			respuesta = prompt("Respuesta invalida. Desea continuar? 's' o 'n'");
		}
	}

	if(contadorHombresSolteros!=0)
	{
		promedioEdadHombresSolteros = sumatoriaEdadHombresSolteros / contadorHombresSolteros;
	}

	mensajeA = "El nombre de la persona con mas temperatura (" + temperaturaMasAlta + ") es: " + nombreConTemperaturaMasAlta;
	mensajeB = "Cantidad de mayores de edad viudos: " + contadorMayoresViudos;
	mensajeC = "Cantidad de hombres solteros o viudos: " + contadorHombresSolterosOViudos;
	mensajeD = "Cantidad de personas de la tercera edad, con mas de 38 grados de temperatura: " + contadorMayoresConFiebre;
	mensajeE = "Promedio de edad entre los hombres solteros: " + promedioEdadHombresSolteros;

	alert(mensajeA + "\n" + mensajeB + "\n" + mensajeC + "\n" + mensajeD + "\n" + mensajeE);
}
