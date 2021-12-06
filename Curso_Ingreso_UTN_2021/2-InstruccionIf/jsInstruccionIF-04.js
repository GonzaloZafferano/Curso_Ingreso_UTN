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


/*


Autor; gonzalo zafferano

Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
/*
function mostrar() {
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var respuesta;
	var nombre;
	var edadIngresada;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var nacionalidad;
	var banderaPrimerTemperatura;
	var mayorTemperaturaValor;
	var mayorTemperaturaNacionalidad;
	var contadorMayoresSolteros;
	var contadorMujeresSolterasOViudas;
	var contadorPersonasTerceraEdadConFiebre;
	var acumuladorEdadesMujeresCasadas;
	var contadorMujeresCasadas;
	var promedioEdadMujeresCasadas;

	acumuladorEdadesMujeresCasadas = 0;
	contadorMujeresCasadas = 0;
	promedioEdadMujeresCasadas = 0;
	contadorPersonasTerceraEdadConFiebre = 0;
	contadorMujeresSolterasOViudas = 0;
	contadorMayoresSolteros = 0;
	banderaPrimerTemperatura = 0;
	mayorTemperaturaValor = 0;
	respuesta = 's';
	mensajeA = "";
	mensajeB = "";
	mensajeC = "";
	mensajeD = "";
	mensajeE = "";

	while (respuesta == 's') {

		nombre = prompt("Ingrese su nombre");

		nacionalidad = prompt("Ingrese su nacionalidad");

		edadIngresada = prompt("Por favor, ingrese la edad");
		edadIngresada = parseInt(edadIngresada);

		while (edadIngresada < 1 || isNaN(edadIngresada)) {
			edadIngresada = prompt("Dato invalido. Por favor, ingrese la edad");
			edadIngresada = parseInt(edadIngresada);
		}

		sexo = prompt("Por favor, ingrese su genero: 'f' o 'm'");
		sexo = sexo.toLowerCase();

		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("Dato invalido. Por favor, ingrese su genero: 'f' o 'm'");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Por favor, ingrese su estado civil: 'casado', 'soltero', 'viudo'");
		estadoCivil = estadoCivil.toLowerCase();

		while (estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo") {
			estadoCivil = prompt("Dato invalido. Por favor, ingrese su estado civil: 'casado', 'soltero', 'viudo'");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperaturaCorporal = prompt("Por favor, ingrese la temperatura. 30 - 45");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		while (temperaturaCorporal < 30 || temperaturaCorporal > 45 || isNaN(temperaturaCorporal)) {
			temperaturaCorporal = prompt("Dato invalido. Por favor, ingrese la temperatura. 30 - 45");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		if (temperaturaCorporal > mayorTemperaturaValor || banderaPrimerTemperatura == 0) {
			banderaPrimerTemperatura = 1;
			mayorTemperaturaValor = temperaturaCorporal;
			mayorTemperaturaNacionalidad = nacionalidad;
		}


		if (edadIngresada > 17 && estadoCivil == "soltero") {
			contadorMayoresSolteros++;
		}


		if (sexo == "f" && estadoCivil != "casado") {
			contadorMujeresSolterasOViudas++;
		}

		if (edadIngresada > 60 && temperaturaCorporal > 38) {
			contadorPersonasTerceraEdadConFiebre++;
		}

		if (sexo == "f" && estadoCivil == "casado") {
			acumuladorEdadesMujeresCasadas += edadIngresada;
			contadorMujeresCasadas++;
		}

		respuesta = prompt("Presione 's' para continuar");
	}

	mensajeA = "La nacionalidad de la persona con mas temperatura (" + mayorTemperaturaValor + " grados) es " + mayorTemperaturaNacionalidad + "\n";

	if (contadorMayoresSolteros != 0) {
		mensajeB = "Hay " + contadorMayoresSolteros + " mayores de edad que son solteros" + "\n";

	}

	if (contadorMujeresSolterasOViudas != 0) {

		mensajeC = "La cantidad de mujeres solteras o viudas es " + contadorMujeresSolterasOViudas + "\n";
	}

	if (contadorPersonasTerceraEdadConFiebre != 0) {
		mensajeD = "Hay " + contadorPersonasTerceraEdadConFiebre + " personas de la tercera edad con fiebre";
	}

	if (contadorMujeresCasadas != 0) {
		promedioEdadMujeresCasadas = acumuladorEdadesMujeresCasadas / contadorMujeresCasadas;
		mensajeE = "El promedio de edad de mujeres casadas es de " + promedioEdadMujeresCasadas;
	}
	alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE);

}
*/
