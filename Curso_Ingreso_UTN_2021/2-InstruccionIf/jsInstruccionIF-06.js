//AUTOR: ZAFFERANO GONZALO
//CONSIGNA:
//Al ingresar una edad debemos informar si la persona es mayor de edad 
//(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).


function mostrar()
{	
	var edadUsuario, mensaje;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if ( edadUsuario <=12)
	{
		mensaje = "Usted es un niño. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años.";
	}
	else if (edadUsuario >=18)
	{
		mensaje = "Usted es mayor de edad. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años.";
	}
	else 
	{	
		mensaje = "Ustes es un adolescente. Usted tiene ";
		mensaje+= edadUsuario;
		mensaje+= " años.";
	} 
		alert(mensaje);



/*

		//Almaceno en una variable el resultado de la comparacion, lo cual sera TRUE o FALSE:

		var edadValida = edadUsuario>18 && edadUsuario<25;
		alert(edadValida); //imprime TRUE o FALSE, dependiendo de la comparacion de 
		//la linea de ARRIBA

*/


}//FIN DE LA FUNCIÓN


/*
Autor: Gonzalo Zafferano
Division: J
Consigna:

EJERCICIO 2
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y
si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio sputnik
b)	El porcentaje de jóvenes que tuvieron la enfermedad
c)	El promedio de edad 
d)  La vacuna más veces aplicada
*/
/*
function mostrar() {
    var nombre;
    var edad;
    var vacuna;
    var contrajoCovid;
    var respuesta;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var banderaMasJoven;
    var masJovenEdad;
    var masJovenNombre;
    var contadorPersonasConCovid;
    var contadorPersonas;
    var porcentajeCovid;
    var acumuladorEdad;
    var promedioEdad;
    var vacunaMasAplicada;
    var vacunaMasAplicadaDosis;
    var contadorAstrazeneca;
    var contadorSinoPharm;
    var contadorSputnik;

    contadorAstrazeneca = 0;
    contadorSinoPharm = 0;
    contadorSputnik = 0;
    acumuladorEdad = 0;
    banderaMasJoven = 0;
    contadorPersonas = 0;
    contadorPersonasConCovid = 0;

    do {
        nombre = prompt("Por favor, ingrese el nombre.");

        while (nombre == "") {
            nombre = prompt("Dato invalido. Por favor ingrese el nombre");
        }

        edad = prompt("Por favor, ingrese la edad.");
        edad = parseInt(edad);

        while (edad < 1 || isNaN(edad)) {
            edad = prompt("Dato invalido. Por favor, ingrese la edad.");
            edad = parseInt(edad);
        }

        vacuna = prompt("Por favor, ingrese la vacuna: 'astrazeneca', 'sinopharm', 'sputnik'");
        vacuna = vacuna.toLowerCase();

        while (vacuna != "astrazeneca" && vacuna != "sinopharm" && vacuna != "sputnik") {
            vacuna = prompt("Dato invalido. Por favor, ingrese la vacuna: 'astrazeneca', 'sinopharm', 'sputnik'");
            vacuna = vacuna.toLowerCase();
        }

        contrajoCovid = prompt("Por favor, ingrese respuesta: 'si', 'no', ");
        contrajoCovid = contrajoCovid.toLowerCase();

        while (contrajoCovid != "si" && contrajoCovid != "no") {
            contrajoCovid = prompt("Dato invalido. Por favor, ingrese respuesta: 'si', 'no',");
            contrajoCovid = contrajoCovid.toLowerCase();
        }

        switch (vacuna) {
            case "astrazeneca":
                contadorAstrazeneca++;
                break;

            case "sinopharm":
                contadorSinoPharm++;
                break;

            case "sputnik":
                contadorSputnik++;
                if (banderaMasJoven == 0 || edad < masJovenEdad) {
                    masJovenEdad = edad;
                    masJovenNombre = nombre;
                    banderaMasJoven = 1;
                }
                break;
        }

        if (contrajoCovid == "si") {
            contadorPersonasConCovid++;
        }

        acumuladorEdad += edad;
        contadorPersonas++;

        respuesta = prompt("Presione 's' para continuar");
        respuesta = respuesta.toLowerCase();
    } while (respuesta == 's');

    if (banderaMasJoven != 0) {
        mensajeA = "A - La persona mas joven que recibio sputnik V es " + masJovenNombre + " y tiene " + masJovenEdad + " años\n";
    }
    else {
        mensajeA = "A - No hubo personas con sputkin V \n";
    }

    if (contadorPersonasConCovid != 0) {
        porcentajeCovid = contadorPersonasConCovid * 100 / contadorPersonas;
        mensajeB = "B - El porcentaje de personas que contrajo covid es del " + porcentajeCovid + "%\n";
    }
    else {
        mensajeB = "B - No hubo personas con covid \n";
    }

    promedioEdad = acumuladorEdad / contadorPersonas;
    mensajeC = "C - El promedio de edad es de " + promedioEdad + "\n";

    if (contadorAstrazeneca > contadorSinoPharm && contadorAstrazeneca > contadorSputnik) {
        vacunaMasAplicada = "Astrazeneca";
        vacunaMasAplicadaDosis = contadorAstrazeneca;
    }
    else {
        if (contadorSinoPharm > contadorSputnik) {
            vacunaMasAplicada = "Sinopharm";
            vacunaMasAplicadaDosis = contadorSinoPharm;

        }
        else {
            vacunaMasAplicada = "Sputnik";
            vacunaMasAplicadaDosis = contadorSputnik;
        }
    }
    mensajeD = "D - La vacuna mas aplicada es " + vacunaMasAplicada + " con " + vacunaMasAplicadaDosis + " dosis";

    alert(mensajeA + mensajeB + mensajeC + mensajeD);

}

*/