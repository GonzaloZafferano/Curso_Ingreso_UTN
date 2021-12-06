/*
EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:

*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"

Se pide informar por document.write:
a) el ingreso con la mayor cantidad de cajas.
b) de las galletitas dulces, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada tipo
[ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)]


*/
function mostrar() {
	var i;
	var marcaProducto;
	var tipoGalletita;
	var cantidadCajas;
	var cantidadKilosPorCaja;
	var nombreProveedor;
	var origen;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var banderaPrimero;
	var mayorCantidadDeCajasMarca;
	var mayorCantidadDeCajasTipo;
	var mayorCantidadDeCajas;
	var mayorCantidadDeCajasKilos;
	var mayorCantidadDeCajasOrigen;
	var mayorCantidadDeCajasProveedor;
	var banderaPrimerGalletitaDulce;
	var menosKiloPorCajaDulce;
	var menosKiloPorCajaDulceMarca;
	var acumuladorCajas;
	var acumuladorSinSal;
	var acumuladorConSal;
	var acumuladorDulces;
	var porcentajeCajas;
	var contadorVueltas;
	var vueltaConMasCajas;


	contadorVueltas = 0;
	banderaPrimerGalletitaDulce = 0;
	banderaPrimero = 0;
	acumuladorCajas = 0;
	acumuladorSinSal = 0;
	acumuladorConSal = 0;
	acumuladorDulces = 0;

	for (i = 0; i < 10; i++) {
		contadorVueltas++;
		marcaProducto = prompt("Por favor, ingrese la marca.");

		while (marcaProducto == "") {
			marcaProducto = prompt("Dato invalido. Por favor ingrese la marca");
		}

		tipoGalletita = prompt("Por favor, ingrese el tipo de galletira: 'con sal', 'sin sal', 'dulces'");
		tipoGalletita = tipoGalletita.toLowerCase();

		while (tipoGalletita != "con sal" && tipoGalletita != "sin sal" && tipoGalletita != "dulces") {
			tipoGalletita = prompt("Dato invalido. Por favor, ingrese el tipo de galletira: 'con sal', 'sin sal', 'dulces'");
			tipoGalletita = tipoGalletita.toLowerCase();
		}

		cantidadCajas = prompt("Por favor, ingrese la cantidad de cajas");
		cantidadCajas = parseInt(cantidadCajas);

		while (cantidadCajas < 1 || isNaN(cantidadCajas)) {
			cantidadCajas = prompt("Dato invalido. Por favor, ingrese la cantidad de cajas");
			cantidadCajas = parseInt(cantidadCajas);
		}

		cantidadKilosPorCaja = prompt("Por favor, ingrese la cantidad de kilos");
		cantidadKilosPorCaja = parseFloat(cantidadKilosPorCaja);

		while (cantidadKilosPorCaja < 1 || isNaN(cantidadKilosPorCaja)) {
			cantidadKilosPorCaja = prompt("Dato invalido. Por favor, ingrese la cantidad de kilos");
			cantidadKilosPorCaja = parseFloat(cantidadKilosPorCaja);
		}

		nombreProveedor = prompt("Por favor, ingrese el nombre del proveedor.");

		while (nombreProveedor == "") {
			nombreProveedor = prompt("Dato invalido. Por favor ingrese el nombre del proveedor");
		}

		origen = prompt("Por favor, ingrese el origen del proveedor: 'nacional', 'mercosur', 'resto del mundo'");
		origen = origen.toLowerCase();

		while (origen != "nacional" && origen != "mercosur" && origen != "resto del mundo") {
			origen = prompt("Dato invalido. Por favor, ingrese el origen del proveedor: 'nacional', 'mercosur', 'resto del mundo'");
			origen = origen.toLowerCase();
		}

		if (banderaPrimero == 0 || cantidadCajas > mayorCantidadDeCajas) {
			banderaPrimero = 1;
			mayorCantidadDeCajas = cantidadCajas;
			vueltaConMasCajas = contadorVueltas;
		}


		switch (tipoGalletita) {
			case "con sal":
				acumuladorConSal += cantidadCajas;
				break;
			case "dulces":
				acumuladorDulces += cantidadCajas;
				if (banderaPrimerGalletitaDulce == 0 || cantidadKilosPorCaja < menosKiloPorCajaDulce) {
					menosKiloPorCajaDulce = cantidadKilosPorCaja;
					menosKiloPorCajaDulceMarca = marcaProducto;
					banderaPrimerGalletitaDulce = 1;
				}

				break;
			case "sin sal":
				acumuladorSinSal += cantidadCajas;
				break;
		}
		contadorVueltas++;
		acumuladorCajas += cantidadCajas;
	}


	/*Se pide informar por document.write:
	a) el ingreso con la mayor cantidad de cajas.
	b) de las galletitas dulces, la que menos kilos tiene por caja.
	c) que porcentaje de cajas hay sobre el total de cada tipo
	[ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)]*/

	mensajeA = "A - Mayor cantidad de cajas: " + mayorCantidadDeCajas + "<br> Kilos por caja: " + mayorCantidadDeCajasKilos + "<br> marca del producto: " + mayorCantidadDeCajasMarca + "<br>origen:" + mayorCantidadDeCajasOrigen + "<br>proveedor: " + mayorCantidadDeCajasProveedor + "<br> tipo de galletitas: " + mayorCantidadDeCajasTipo + "<br>";

	if (banderaPrimerGalletitaDulce != 0) {
		mensajeB = "B - El menor peso por caja fue " + menosKiloPorCajaDulce + "kilos, y la marca de la galletita dulce es " + menosKiloPorCajaDulceMarca + "<br>";
	}
	else {
		mensajeB = "B - No hubo galletitas dulces <br> ";
	}

	mensajeC = "C - El porcentaje de cajas, segun el tipo de galletitas es: <br>";

	porcentajeCajas = acumuladorSinSal * 100 / acumuladorCajas;
	mensajeC += "Sin sal: " + porcentajeCajas + "%<br>";

	porcentajeCajas = acumuladorConSal * 100 / acumuladorCajas;
	mensajeC += "Con sal: " + porcentajeCajas + "%<br>";

	porcentajeCajas = acumuladorDulces * 100 / acumuladorCajas;
	mensajeC += "Dulces: " + porcentajeCajas + "%";

	document.write(mensajeA + mensajeB + mensajeC);


























}




//Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
//ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar2()
{	
	
/*	
	

	//alert("ok");
	//declaro variables: reservo espacio en memoria.
let nombre;
let edad;

//asigno las variables con el VALUE de la caja de texto.
nombre = document.getElementById("txtIdNombre").value;
edad= document.getElementById("txtIdEdad").value;

//concateno las variables con los strings (literales de cadena),
// obteniendo una oracion mas grande.
//los literales de cadena van entre comillas dobles "" 
//los espacios en blanco son caracteres. en ASCII es el 255 (nbsp= in blank space)
alert("Usted se llama " + nombre + " y tiene " + edad + " años");
//los literales de cadena son constantes que siempre van a aparecer al activarse 
//la funcion "alert"
//mientras que las variables pueden alterar su contenido.



//back tick = alt gr + tecla y luego 'space'. Obtengo ` `
//Template String = plantilla de cadenas:
alert(`usted se llama ${nombre} y tiene ${edad} años`);



*/





//declaracion de variables
var nombreDeUsuario, mensaje, edadDeUsuario;

//asignacion de variables
nombreDeUsuario = document.getElementById("txtIdNombre").value;
edadDeUsuario = document.getElementById("txtIdEdad").value;

//creacion de mensaje
mensaje = "Usted se llama ";
mensaje+= nombreDeUsuario;
mensaje +=  " y tiene ";
mensaje += edadDeUsuario;
mensaje += " años";

//alert("Usted se llama " + nombreDeUsuario + " y tiene " + edadDeUsuario + " años");
//mostramos el mensaje
alert(mensaje);

//vaciamos las cajas de texto "input" para que el usuario pueda volver a escribir, 
//sin tener que estar borrando
document.getElementById("txtIdNombre").value = "";
document.getElementById("txtIdEdad").value = "";


}







