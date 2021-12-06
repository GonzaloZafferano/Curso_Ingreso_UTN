/*
Autor: Gonzalo Zafferano
Division: J
Consigna:

*/

function mostrar() {


	//SOLO generoingresado01
	generoingresado01 = prompt("Por favor, ingrese el genero: 'F' o 'M' o 'NB'");
	generoingresado01 = generoingresado01.toLowerCase();

	while (generoingresado01 != 'f' && generoingresado01 != 'm' && generoingresado01 != "nb") {
		generoingresado01 = prompt("Dato invalido. Por favor, ingrese el genero: 'F' o 'M' o 'NB'");
		generoingresado01 = generoingresado01.toLowerCase();
	}






	nombre01 = prompt("Por favor, ingrese el nombre.");

	while (nombre01 == "") {
		nombre01 = prompt("Dato invalido. Por favor ingrese el nombre");
	}




	//datos literales

	datoliteral = prompt("Por favor, ingrese la marca: 'marca1', 'marca2', 'marca3'");
	datoliteral = datoliteral.toLowerCase();

	while (datoliteral != "marca1" && datoliteral != "marca2" && datoliteral != "marca3") {
		datoliteral = prompt("Dato invalido. Por favor, ingrese la marca: 'marca1', 'marca2', 'marca3'");
		datoliteral = datoliteral.toLowerCase();
	}






	//SOLO edades o valores numericos ENTEROS-------------------

	edadingresada01 = prompt("Por favor, ingrese la edad. 1 - 18");
	edadingresada01 = parseInt(edadingresada01);

	while (edadingresada01 < 1 || edadingresada01 > 18 || isNaN(edadingresada01)) {
		edadingresada01 = prompt("Dato invalido. Por favor, ingrese la edad. 1 - 18");
		edadingresada01 = parseInt(edadingresada01);
	}



	//-----------------------temp o plata DECIMAL
	edadingresada01 = prompt("Por favor, ingrese la edad. 1 - 18");
	edadingresada01 = parseFloat(edadingresada01);

	while (edadingresada01 < 1 || edadingresada01 > 18 || isNaN(edadingresada01)) {
		edadingresada01 = prompt("Dato invalido. Por favor, ingrese la edad. 1 - 18");
		edadingresada01 = parseFloat(edadingresada01);
	}





	//---------------------------------------------
	var respuesta;

	respuesta = 's';

	while (respuesta == 's') {


		respuesta = prompt("Presione 's' para continuar");
	}


	do {


		respuesta = prompt("Presione 's' para continuar");
		respuesta = respuesta.toLowerCase();
	} while (respuesta == 's');
	//-----------------------------------------------------------


	for (i = 0; i < CANTIDADDEVUELTAS; i++) {

	}


	//------------------------------------------

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;




	mensajeA = "A - ";
	mensajeB = "B - ";
	mensajeC = "C - ";
	mensajeD = "D - ";
	mensajeE = "E - ";


	alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE);



/*

	//-----------------------------------

	switch (     ) {
		case :

			break;

		case :

			break;

		case :

			break;

		case :

			break;
	}


*/


	if (PRIMERTIPO > SEGUNDOTIPO && PRIMERTIPO > TERCERTIPO) {
		productoConMasUnidadesTipo = "PRIMERO";
		productoConMasUnidadesCantidad = PRIMERTIPO;
		productoConMasunidadesCompras = CONTADORPRIMERO;
		promedioProductoConMasUnidades = PRIMERTIPO / CONTADORPRIMERO;
	}
	else {
		if (SEGUNDOTIPO > TERCERTIPO) {
			productoConMasUnidadesTipo = "SEGUNDO";
			productoConMasUnidadesCantidad = SEGUNDOTIPO;
			productoConMasunidadesCompras = CONTADORSEGUNDO;
			promedioProductoConMasUnidades = SEGUNDOTIPO / CONTADORSEGUNDO;
		}
		else {
			productoConMasUnidadesTipo = "TERCERO";
			productoConMasUnidadesCantidad = TERCERTIPO;
			productoConMasunidadesCompras = CONTADORTERCERO;
			promedioProductoConMasUnidades = TERCERTIPO / CONTADORTERCERO;
		}
	}

}





/*
Autor Gonzalo Zafferano
consigna
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para
obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor
a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron
fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No
Binario
*/
function mostrar() {
	var nombre;
	var edadIngresada;
	var generoIngresado;
	var vacunaRecibida;
	var temperaturaCorporal;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var mensajeF;
	var mensajeG;
	var mensajeH;
	var mensajeI;
	var respuesta;
	var banderaPrimerTemperatura;
	var mayorTemperaturaValor;
	var mayorTemperaturaNombre;
	var mayorTemperaturaVacuna;
	var contadorMujeresSputnikV;
	var contadorNoBinarioSinSputnikV;
	var contadorAstraZeneca;
	var contadorSputnikV;
	var contadorOtras;
	var contadorPersonasAstraZenecaConFiebre;
	var promedioEdadHombresSputnikVSinFiebre;
	var acumuladorEdadHombresSputnikVSinFiebre;
	var contadorEdadHombresSputnikVSinFiebre;
	var contadorPersonasVacunadas;
	var porcentajePersonasConAstraZeneca;
	var vacunaMasAplicada;
	var dosisMasAplicadas;
	var contadorEdadSputnikV;
	var contadorEdadAstrazeneca;
	var contadorEdadOtras;
	var acumuladorEdadSputnikV;
	var acumuladorEdadAstrazeneca;
	var acumuladorEdadOtras;
	var promedioEdadSputnikV;
	var promedioEdadAstrazeneca;
	var promedioEdadOtras;
	var contadorHombres;
	var contadorMujeres;
	var contadorNoBinario;
	var procentajeVacunadoPorGenero;

	contadorHombres = 0;
	contadorMujeres = 0;
	contadorNoBinario = 0;
	contadorEdadSputnikV = 0;
	contadorEdadAstrazeneca = 0;
	contadorEdadOtras = 0;
	acumuladorEdadSputnikV = 0;
	acumuladorEdadAstrazeneca = 0;
	acumuladorEdadOtras = 0;
	porcentajePersonasConAstraZeneca = 0;
	contadorPersonasVacunadas = 0;
	promedioEdadHombresSputnikVSinFiebre = 0;
	acumuladorEdadHombresSputnikVSinFiebre = 0;
	contadorEdadHombresSputnikVSinFiebre = 0;
	contadorPersonasAstraZenecaConFiebre = 0;
	contadorAstraZeneca = 0;
	contadorSputnikV = 0;
	contadorOtras = 0;
	contadorNoBinarioSinSputnikV = 0;
	contadorMujeresSputnikV = 0;
	banderaPrimerTemperatura = 0;
	mayorTemperaturaValor = 0;
	mensajeA = "";
	mensajeB = "";
	mensajeC = "";
	mensajeD = "";
	mensajeE = "";
	mensajeF = "";
	mensajeG = "";
	mensajeH = "";
	mensajeI = "";
	respuesta = 's';

	while (respuesta == 's') {

		nombre = prompt("Por favor, ingrese su nombre.");

		while (nombre == "") {
			nombre = prompt("Dato invalido. Por favor ingrese su nombre");
		}

		edadIngresada = prompt("Por favor, ingrese su edad.");
		edadIngresada = parseInt(edadIngresada);

		while (edadIngresada < 1 || isNaN(edadIngresada)) {
			edadIngresada = prompt("Dato invalido. Por favor, ingrese su edad.");
			edadIngresada = parseInt(edadIngresada);
		}

		generoIngresado = prompt("Por favor, ingrese su genero: 'f' o 'm' o 'nb' (no binario)");
		generoIngresado = generoIngresado.toLowerCase();

		while (generoIngresado != 'f' && generoIngresado != 'm' && generoIngresado != "nb") {
			generoIngresado = prompt("Dato invalido. Por favor, ingrese su genero: 'f' o 'm' o 'nb' (no binario)");
			generoIngresado = generoIngresado.toLowerCase();
		}

		vacunaRecibida = prompt("Por favor, ingrese el nombre de la vacuna recibida: 'SputnikV', 'AstraZeneca', 'Otra'");
		vacunaRecibida = vacunaRecibida.toLowerCase();

		while (vacunaRecibida != "sputnikv" && vacunaRecibida != "astrazeneca" && vacunaRecibida != "otra") {
			vacunaRecibida = prompt("Dato invalido. Por favor, ingrese el nombre de la vacuna recibida: 'SputnikV', 'AstraZeneca', 'Otra'");
			vacunaRecibida = vacunaRecibida.toLowerCase();
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
			mayorTemperaturaNombre = nombre;
			mayorTemperaturaVacuna = vacunaRecibida;
		}

		switch (generoIngresado) {
			case "f":
				contadorMujeres++;
				if (vacunaRecibida == "sputnikv") {
					contadorMujeresSputnikV++;
				}
				break;
			case "m":
				contadorHombres++;
				if (vacunaRecibida == "sputnikv" && temperaturaCorporal <= 37) {
					contadorEdadHombresSputnikVSinFiebre++;
					acumuladorEdadHombresSputnikVSinFiebre += edadIngresada;
				}
				break;
			case "nb":
				contadorNoBinario++;
				if (vacunaRecibida != "sputnikv") {
					contadorNoBinarioSinSputnikV++;
				}
				break;
		}

		switch (vacunaRecibida) {
			case "astrazeneca":
				contadorAstraZeneca++;
				acumuladorEdadAstrazeneca += edadIngresada;
				if (temperaturaCorporal > 38) {
					contadorPersonasAstraZenecaConFiebre++;
				}
				break;
			case "sputnikv":
				contadorSputnikV++;
				acumuladorEdadSputnikV += edadIngresada;
				break;
			case "otra":
				contadorOtras++;
				acumuladorEdadOtras += edadIngresada;
				break;
		}

		contadorPersonasVacunadas++;

		respuesta = prompt("Presione 's' para continuar");
	}

	mensajeA = "El nombre de la persona con mayor temperatura (" + mayorTemperaturaValor + " grados) es " + mayorTemperaturaNombre + "y la vacuna recibida es " + mayorTemperaturaVacuna + "\n";

	if (contadorMujeresSputnikV != 0) {
		mensajeB = "La cantidad de mujeres que recibieron SputnikV es " + contadorMujeresSputnikV + "\n";
	}

	if (contadorNoBinarioSinSputnikV != 0) {
		mensajeC = "La cantidad de personas de genero no binario que recibieron Astrazeneca  u otra es " + contadorNoBinarioSinSputnikV + "\n";
	}

	if (contadorPersonasAstraZenecaConFiebre != 0) {
		mensajeD = "La cantidad de personas con Astrazeneca que presentaron mas de 38 grados es " + contadorPersonasAstraZenecaConFiebre + "\n";
	}

	if (contadorEdadHombresSputnikVSinFiebre != 0) {
		promedioEdadHombresSputnikVSinFiebre = acumuladorEdadHombresSputnikVSinFiebre / contadorEdadHombresSputnikVSinFiebre;
		mensajeE = "El promedio de edad de los hombres que se vacunaron con sputnikV y no presentaron fiebre es de " + promedioEdadHombresSputnikVSinFiebre + "\n";
	}

	if (contadorAstraZeneca != 0) {
		porcentajePersonasConAstraZeneca = contadorAstraZeneca * 100 / contadorPersonasVacunadas;
		mensajeF = "El porcentaje de personas que se aplicaron astrazeneca es del " + porcentajePersonasConAstraZeneca + "% \n";

	}

	if (contadorAstraZeneca > contadorOtras && contadorAstraZeneca > contadorSputnikV) {
		vacunaMasAplicada = "AstraZeneca";
		dosisMasAplicadas = contadorAstraZeneca;
	}
	else {
		if (contadorSputnikV > contadorOtras) {
			vacunaMasAplicada = "SputnikV";
			dosisMasAplicadas = contadorSputnikV;
		}
		else {
			vacunaMasAplicada = "Otras";
			dosisMasAplicadas = contadorOtras;
		}
	}
	mensajeG = "La vacuna mas aplicada fue " + vacunaMasAplicada + ", con " + dosisMasAplicadas + " dosis \n";

	mensajeH = "El promedio de edad por vacuna es de \n";

	if (contadorSputnikV != 0) {
		promedioEdadSputnikV = acumuladorEdadSputnikV / contadorSputnikV;
		mensajeH += "SputnikV " + promedioEdadSputnikV + " años \n";
	}

	if (contadorOtras != 0) {
		promedioEdadOtras = acumuladorEdadOtras / contadorOtras;
		mensajeH += "otras " + promedioEdadOtras + " años\n";
	}

	if (contadorAstraZeneca != 0) {
		promedioEdadAstrazeneca = acumuladorEdadAstrazeneca / contadorAstraZeneca;
		mensajeH += "Astrazeneca " + promedioEdadAstrazeneca + " años\n";
	}

	mensajeI = "El porcentaje vacunado, segun cada genero es \n";

	if (contadorHombres != 0) {
		procentajeVacunadoPorGenero = contadorHombres * 100 / contadorPersonasVacunadas;
		mensajeI += "Hombres " + procentajeVacunadoPorGenero + "% \n";
	}
	if (contadorMujeres != 0) {
		procentajeVacunadoPorGenero = contadorMujeres * 100 / contadorPersonasVacunadas;
		mensajeI += "Mujeres " + procentajeVacunadoPorGenero + "% \n";
	}
	if (contadorNoBinario != 0) {
		procentajeVacunadoPorGenero = contadorNoBinario * 100 / contadorPersonasVacunadas;
		mensajeI += "No binario " + procentajeVacunadoPorGenero + "% \n";
	}

	alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE + mensajeF + mensajeG + mensajeH + mensajeI);
}











