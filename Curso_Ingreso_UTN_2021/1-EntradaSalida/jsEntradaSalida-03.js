/*
Autor: Gonzalo Zafferano
Division: J
Consigna:
EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros
 con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El importe total a pagar por las vacunaciones, sin descuento.
b)El importe total a pagar con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
c)La raza con más cantidad de perros
d)Nombre, raza y edad del perro más viejo ingresado

*/
function mostrar() {

	var nombre;
	var raza;
	var edad;
	var peso;
	var precioConsulta;
	var respuesta;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var importeTotalAPagar;
	var acumuladorImporteTotalAPagar;
	var contadorPerros;
	var descuento;
	var importeTotalAPagarConDto;
	var contadorGalgo;
	var contadorPastor;
	var contadorSharpei;
	var masPerrosRaza;
	var masPerrosCantidad;
	var banderaPrimerPerro;
	var masViejoNombre;
	var masViejoEdad;
	var masViejoRaza;

	banderaPrimerPerro = 0;
	contadorPerros = 0;
	acumuladorImporteTotalAPagar = 0;
	contadorGalgo = 0;
	contadorPastor = 0;
	contadorSharpei = 0;

	do {
		nombre = prompt("Por favor, ingrese el nombre.");

		while (nombre == "") {
			nombre = prompt("Dato invalido. Por favor ingrese el nombre");
		}


		raza = prompt("Por favor, ingrese la raza: 'sharpei', 'galgo', 'pastor'");
		raza = raza.toLowerCase();

		while (raza != "sharpei" && raza != "galgo" && raza != "pastor") {
			raza = prompt("Dato invalido. Por favor, ingrese la raza: 'sharpei', 'galgo', 'pastor'");
			raza = raza.toLowerCase();
		}

		edad = prompt("Por favor, ingrese la edad.");
		edad = parseInt(edad);

		while (edad < 1 || edad > 25 || isNaN(edad)) {
			edad = prompt("Dato invalido. Por favor, ingrese la edad.");
			edad = parseInt(edad);
		}

		peso = prompt("Por favor, ingrese el peso");
		peso = parseFloat(peso);

		while (peso < 1 || isNaN(peso)) {
			peso = prompt("Dato invalido. Por favor, ingrese el peso.");
			peso = parseFloat(peso);
		}

		precioConsulta = prompt("Por favor, ingrese el precio de consulta. 500 - 1500");
		precioConsulta = parseFloat(precioConsulta);

		while (precioConsulta < 500 || precioConsulta > 1500 || isNaN(precioConsulta)) {
			precioConsulta = prompt("Dato invalido. Por favor, ingrese el precio de consulta. 500 - 1500");
			precioConsulta = parseFloat(precioConsulta);
		}

		importeTotalAPagar = precioConsulta;

		acumuladorImporteTotalAPagar += importeTotalAPagar;

		switch (raza) {
			case "galgo":
				contadorGalgo++;
				break;

			case "pastor":
				contadorPastor++;
				break;

			case "sharpei":
				contadorSharpei++;
				break;
		}


		if (banderaPrimerPerro == 0 || edad > masViejoEdad) {
			banderaPrimerPerro = 1;
			masViejoEdad = edad;
			masViejoNombre = nombre;
			masViejoRaza = raza;
		}
		contadorPerros++;

		respuesta = prompt("Presione 's' para continuar");
		respuesta = respuesta.toLowerCase();
	} while (respuesta == 's');

	mensajeA = "A - El importe total a pagar sin descuento es de " + acumuladorImporteTotalAPagar + "\n";

	if (contadorPerros > 4) {

		descuento = 30;
	}
	else {
		if (contadorPerros > 2) {
			descuento = 20;
		}
		else {
			descuento = 0;
		}

	}

	if (descuento != 0) {
		importeTotalAPagarConDto = acumuladorImporteTotalAPagar - acumuladorImporteTotalAPagar * descuento / 100;
		mensajeB += "B - El total a pagar con un " + descuento + "% de descuento es de " + importeTotalAPagarConDto + "\n";
	}
	else {
		mensajeB = "B - No hubo descuento, fueron en total " + contadorPerros + "perros \n";
	}

	if (contadorSharpei > contadorPastor && contadorSharpei > contadorGalgo) {
		masPerrosRaza = "sharpei";
		masPerrosCantidad = contadorSharpei;
	}
	else {
		if (contadorPastor > contadorGalgo) {
			masPerrosRaza = "pastor";
			masPerrosCantidad = contadorPastor;
		}
		else {
			masPerrosRaza = "galgo";
			masPerrosCantidad = contadorGalgo;
		}
	}

	mensajeC = "C - La raza con mas perros es " + masPerrosRaza + " con " + masPerrosCantidad + " perros \n";
	mensajeD = "D - El perro mas viejo es " + masViejoNombre + " con " + masViejoEdad + " años. Su raza es " + masViejoRaza;



	alert(mensajeA + mensajeB + mensajeC + mensajeD);





}




/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar2()
{

	//Forma 1: usando una variable creada por el navegador.
	//El navegador crea, por su cuenta, una variable por cada elemento/control 
	//del archivo HTML que tenga ID . 
	//Esa variable guarda una referencia a un elemento/control con ID. 
	//El nombre de esa variable sera igual al nombre de la propiedad ID 
	//del control, cuya referencia almacena.
//de esta forma, la variable puede llamar a las propiedades del control (value)
//ya que almacena una referencia a dicho control.
//por su parte, el archivo .JS tiene disponibles esas variables (referencias 
//a controles HTML) creadas por el navegador

//Como estoy llamando a una variable (y no una cadena) no uso las comillas ""

/*

 	var nombreIngresado;
	nombreIngresado = txtIdNombre.value;
	alert(nombreIngresado);

*/




/*



//Forma Standar de Java Script (Recomendable)
let nombre;
nombre= document.getElementById("txtIdNombre").value; //no tiene propiedad 'text'.
//la funcion me pide un dato STRING, para encontrar la propiedad ID (que es un string) del control.
//traigo el valor del control/elemento del archivo html y copio
//ese valor a la variable "nombre"
//usamos el GET de la propiedad value.

alert(nombre);


//usamos el SET para setear la propiedad value.
//"pisamos" el valor de la caja de texto, reasignandolo con cadena vacia.
//al cerrarse la ventana modal, se ejecuta la linea de a continuacion:
document.getElementById("txtIdNombre").value = "";
//seteamos a string.empty.



//la variable no queda enganchada a la caja de texto, sino que guarda una foto.
//los cambios futuros en la variable o en la caja de texto, no afectan al otro.

alert(nombre);// la variable "nombre" no se ve afectada por el cambio 
//de la propiedad "value" de la caja de texto.
//En este caso, la variable no esta almacenando una referencia, sino una copia.





*/




//declaro la variable, reservando un espacio en memoria.
//en la variable almaceno el valor de la propiedad "value" del control "txtIdNombre",
//perteneciente al archivo HTML.

var nombreIngresado = document.getElementById("txtIdNombre").value;
alert (nombreIngresado);

}


