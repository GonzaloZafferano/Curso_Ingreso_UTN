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
function mostrar() {

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var nacionalidad;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var banderaMayorTemperatura;
	var mayorTemperaturaNacionalidad;
	var mayorTemperatura;
	var contadorMayoresDeEdadSolteros;
	var contadorMujeresSolterasOViudas;
	var contadorPersonasMayoresConFiebre;
	var acumuladorEdadMujeresCasadas;
	var contadorMujeresCasadas;
	var promedioEdadMujeresCasadas;

	acumuladorEdadMujeresCasadas = 0;
	contadorMujeresCasadas = 0;
	contadorPersonasMayoresConFiebre = 0;
	contadorMujeresSolterasOViudas = 0;
	contadorMayoresDeEdadSolteros = 0;
	banderaMayorTemperatura = 0;

	do {

		nombre = prompt("Por favor, ingrese su nombre.");

		while (nombre == "") {
			nombre = prompt("Dato invalido. Por favor ingrese su nombre");
		}

		nacionalidad = prompt("Por favor, ingrese su nacionalidad.");

		while (nacionalidad == "") {
			nacionalidad = prompt("Dato invalido. Por favor ingrese su nacionalidad");
		}

		edad = prompt("Por favor, ingrese su edad. 1 - 105");
		edad = parseInt(edad);

		while (edad < 1 || edad > 105 || isNaN(edad)) {
			edad = prompt("Dato invalido. Por favor, ingrese su edad. 1 - 105");
			edad = parseInt(edad);
		}

		sexo = prompt("Por favor, ingrese su genero: 'F' o 'M'");
		sexo = sexo.toLowerCase();

		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("Dato invalido. Por favor, ingrese su genero: 'F' o 'M'");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Por favor, ingrese el estado civil: 'soltero', 'casado', 'viudo'");
		estadoCivil = estadoCivil.toLowerCase();

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Dato invalido. Por favor, ingrese el estado civil: 'soltero', 'casado', 'viudo'");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperaturaCorporal = prompt("Por favor, ingrese su temperatura. 30 - 45");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		while (temperaturaCorporal < 30 || temperaturaCorporal > 45 || isNaN(temperaturaCorporal)) {
			temperaturaCorporal = prompt("Dato invalido. Por favor, ingrese su temperatura. 30 - 45");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		if (temperaturaCorporal > mayorTemperatura || banderaMayorTemperatura == 0) {
			banderaMayorTemperatura = 1;
			mayorTemperatura = temperaturaCorporal;
			mayorTemperaturaNacionalidad = nacionalidad;
		}

		switch (estadoCivil) {
			case "casado":
				if (sexo == "f") {
					acumuladorEdadMujeresCasadas += edad;
					contadorMujeresCasadas++;
				}
				break;
			case "soltero":
				if (edad > 17) {
					contadorMayoresDeEdadSolteros++;
				}
			case "viudo":
				if (sexo == "f") {
					contadorMujeresSolterasOViudas++;
				}
				break;
		}

		if (edad > 60 && temperaturaCorporal > 38) {
			contadorPersonasMayoresConFiebre++;
		}

		respuesta = prompt("Presione 's' para continuar");
	} while (respuesta == 's');


	mensajeA = "A - La mayor temperatura registrada fue de " + mayorTemperatura + " y la nacionalidad de esa persona es " + mayorTemperaturaNacionalidad + "\n";

	if (contadorMayoresDeEdadSolteros != 0) {
		mensajeB = "B - La cantidad de mayores de edad solteros es de " + contadorMayoresDeEdadSolteros + "\n";
	}
	else {
		mensajeB = "B - No hay mayores de edad solteros" + "\n";
	}

	if (contadorMujeresSolterasOViudas != 0) {
		mensajeC = "C - La cantidad de mujeres solteras o viudas es de " + contadorMujeresSolterasOViudas + "\n";
	}
	else {

		mensajeC = "C - No hay mujeres solteras o viudas" + "\n";
	}

	if (contadorPersonasMayoresConFiebre != 0) {
		mensajeD = "D - La cantidad de personas mayores de edad con fiebre es de " + contadorPersonasMayoresConFiebre + "\n";
	}
	else {
		mensajeD = "D - No hay mayores de edad con fiebre \n";
	}

	if (contadorMujeresCasadas != 0) {
		promedioEdadMujeresCasadas = acumuladorEdadMujeresCasadas / contadorMujeresCasadas;
		mensajeE = "E - El promedio de edad de muejres casadas es de " + promedioEdadMujeresCasadas;
	}
	else {
		mensajeE = "E - No hubo mujeres casadas ";

	}

	alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE);


































































	/*
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

		
				if (edadIngresada > 60 && temperaturaCorporal > 38) {
					contadorPersonasTerceraEdadConFiebre++;
				}

		if (edadIngresada > 17 && estadoCivil == "soltero") {
			contadorMayoresSolteros++;
		}

		if (sexo == "f" && estadoCivil != "casado") {
			contadorMujeresSolterasOViudas++;
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
*/
}
