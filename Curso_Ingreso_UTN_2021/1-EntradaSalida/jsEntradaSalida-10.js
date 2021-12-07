/*
Ejercicio 10 - Bis

Se pide por Prompt() el % que se desea descontar al importe.

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	/*



	//declaracion de las variables:
	var importe, resultadoConDescuento;
 
	//asigno las variables (inicializo)
	importe = parseInt(document.getElementById("txtIdImporte").value);

	//resultadoConDescuento = importe - importe*0.25;
	//o se puede hacer
	resultadoConDescuento = importe * 0.75;

	//seteo la propiedad 'value'
	document.getElementById("txtIdResultado").value = resultadoConDescuento;

	//mensaje para el usuario:
	alert(`Importe total, con descuento incluido del 25% es de $${resultadoConDescuento}`);





	*/






	
	//declaracion de las variables:
	var importe, resultadoConDescuento, porcentajeIngresado, mensaje;

	//inicializo con prompt()
	porcentajeIngresado = parseInt (prompt("Ingrese por favor el porcentaje del descuento: "));

 
	//asigno las variables (inicializo)
	importe = parseInt(document.getElementById("txtIdImporte").value);


	//importe y porcentaje ya estan parseados a 'int'
	resultadoConDescuento = importe - importe * porcentajeIngresado/100;

	//seteo la propiedad 'value'
	document.getElementById("txtIdResultado").value = resultadoConDescuento;


	//mensaje para el usuario:
	mensaje = "Importe total, con descuento incluido del ";
	mensaje += porcentajeIngresado;
	mensaje += "% es de $";
	mensaje += resultadoConDescuento;

	alert(mensaje);




}


/*
entrada:
-La entrada es a traves del input 'importe', a traves del ID
-(puede ser por prompt())

proceso:
-calculo el descuento
-aplico el descuento

salida:
*salida para usuario:
-La salida es a traves del input (readonly) 'resultado', a traves del ID
-(puede ser con alert())
-document.write

*salida para programador:
-console.log



*/

/*

SIMULACRO JULIO 2021

Autor: Gonzalo Zafferano
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener 
distintos datos estadísticos:
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
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/
/*
function mostrar() {

	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperaturaCorporal;
	var respuesta;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var banderaMayorTemperatura;
	var mayorTemperaturaNombre;
	var mayorTemperaturaVacuna;
	var mayorTemperatura;
	var contadorFemeninoConSputnikV;
	var contadorNoBinario;
	var contadorAstrazenecaConFiebre;
	var promedioEdadHombreSinFiebreConSputnik;
	var contadorHombres;
	var acumuladorEdadHombres;

	acumuladorEdadHombres = 0;
	contadorHombres = 0;
	promedioEdadHombreSinFiebreConSputnik = 0;
	contadorAstrazenecaConFiebre = 0;
	contadorNoBinario = 0;
	contadorFemeninoConSputnikV = 0;
	banderaMayorTemperatura = 0;
	mensajeA = "";
	mensajeB = "";
	mensajeC = "";
	mensajeD = "";
	mensajeE = "";
	respuesta = 's';

	while (respuesta == 's') {
		nombre = prompt("Ingrese su nombre");

		edad = prompt("ingrese su edad");
		edad = parseInt(edad);

		while (edad < 1 || isNaN(edad)) {
			edad = prompt("Edad invalida. Ingrese su edad");
			edad = parseInt(edad);
		}

		genero = prompt("Ingrese el genero 'f', 'm'  o 'nb' (no binario)");
		genero = genero.toLowerCase();

		while (genero != 'f' && genero != 'm' && genero != "nb") {
			genero = prompt("Dato invalido. Ingrese el genero 'f', 'm'  o 'nb' (no binario)");
			genero = genero.toLowerCase();
		}


		vacuna = prompt("Ingrese la vacuna: SputnikV, AstraZeneca, Otra");
		vacuna = vacuna.toLowerCase();
		while (vacuna != "sputnikv" && vacuna != "astrazeneca" && vacuna != "otra") {
			vacuna = prompt("Dato invalido. Ingrese la vacuna: SputnikV, AstraZeneca, Otra");
			vacuna = vacuna.toLowerCase();
		}

		temperaturaCorporal = prompt("Ingrese la temperatura corporal durante la primera noche");
		temperaturaCorporal = parseFloat(temperaturaCorporal);
		while (temperaturaCorporal < 30 || isNaN(temperaturaCorporal)) {
			temperaturaCorporal = prompt("Dato invalido. Ingrese la temperatura corporal durante la primera noche");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}

		if (banderaMayorTemperatura == 0) {
			banderaMayorTemperatura = 1;
			mayorTemperatura = temperaturaCorporal;
			mayorTemperaturaNombre = nombre;
			mayorTemperaturaVacuna = vacuna;
		}
		else {
			if (temperaturaCorporal > mayorTemperatura) {
				mayorTemperatura = temperaturaCorporal;
				mayorTemperaturaNombre = nombre;
				mayorTemperaturaVacuna = vacuna;
			}
		}

		if (genero == 'f' && vacuna == "sputnikv") {
			contadorFemeninoConSputnikV++;
		}

		if (genero == "nb" && vacuna != "sputnikv") {
			contadorNoBinario++;
		}

		if (vacuna == "astrazeneca" && temperaturaCorporal > 38) {
			contadorAstrazenecaConFiebre++;
		}




		if (vacuna == "sputnikv" && genero == "m" && temperaturaCorporal <= 37) {
			contadorHombres++;
			acumuladorEdadHombres += edad;
		}
		respuesta = prompt("presione 's' para continuar");
	}

	mensajeA = "El nombre de la persona con mayor temperatura es " + mayorTemperaturaNombre + ", y la vacuna recibida fue " + mayorTemperaturaVacuna + ", y su temperatura es " + mayorTemperatura + "grados \n";

	if (contadorFemeninoConSputnikV != 0) {
		mensajeB = "La cantidad de mujeres que recibieron sputnikV es " + contadorFemeninoConSputnikV + "\n";
	}

	if (contadorNoBinario != 0) {
		mensajeC = "La cantidad de personas con genero no binario que recibieron una vacuna astrazeneca u otra es de " + contadorNoBinario + "\n";
	}

	if (contadorAstrazenecaConFiebre != 0) {
		mensajeD = "Personas con astrazeneca que presentaron fiebre: " + contadorAstrazenecaConFiebre + "\n";
	}


	if (contadorHombres != 0) {
		promedioEdadHombreSinFiebreConSputnik = acumuladorEdadHombres / contadorHombres;
		mensajeE = "Promedio de edad de hombres sin fiebre, con sputnikv: " + promedioEdadHombreSinFiebreConSputnik;
	}
	alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE);
}
*/